import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiMethods } from 'src/app/utils/constants';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(
    private httpService: HttpService,
    private store: StoreService
  ) { }

  fetchWeatherDataByUserInput(lat: number, lng: number){
    let api = `v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&timezone=UTC&daily=temperature_2m_max`;
    this.httpService.requestCall(api, ApiMethods.GET).subscribe(
      (rest: any) => { 
          console.log(rest)
          let daily = this.setToDailyGraphFormt(rest.daily.time, rest.daily.temperature_2m_max)
          let hourly = this.setToHourlyGraphFormt(rest.hourly.time, rest.hourly.temperature_2m);
          this.store.setDailyData(daily);
          this.store.setHourlyData(hourly);
      },
      (error: any) => { console.log(error)}
    );
  }

  setToDailyGraphFormt(time: string[], temp: number[]){
      let rest = [];
      for(let i = 0; i < time.length; i++){
        let item = { name: time[i], value: temp[i]}
        rest.push(item);
      }
      return rest;
  }

  setToHourlyGraphFormt(time: string[], temp: number[]){
    let item;
    let rest = [];
    let currDay = time[0];
    let hourList: any[] = [];
      for(let i = 0; i < time.length; i++){
        // sort by day
        let date1 = new Date(time[i]);
        let date2 = new Date(time[i+1]);
        hourList.push({ name: date1.getHours(), value: temp[i]})
        //detect when the day has changed
        if(date1.getDay() !== date2.getDay()){
          item = { day: currDay, hoursList: hourList}
          rest.push(item);
          currDay = time[i+1]
          hourList = [];
        }
      }
      item = { day: currDay, hoursList: hourList}
      rest.push(item);
      console.log(rest)
      return rest;
  }
}
