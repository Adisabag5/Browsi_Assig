import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  longitude: number = 34.855499;
  latitude: number = 32.109333;

  dailyWeather = new BehaviorSubject<any>([]);
  dailyWeatherObserver = this.dailyWeather.asObservable();

  hourlyWeather = new BehaviorSubject<any>([]);
  hourlyWeatherObserver = this.hourlyWeather.asObservable();

  constructor() { }

  setDailyData(dailyData: any){
    this.dailyWeather.next(dailyData);
  }
  setHourlyData(hourlyData: any){
    this.hourlyWeather.next(hourlyData);
  }
  setCoordinates(lat: number, lng: number){
    this.latitude = lat;
    this.longitude = lng;
    this.setLocalStorage();
  }
  setLocalStorage(){
    localStorage.setItem("latitude",String(this.latitude) )
    localStorage.setItem("longitude",String(this.longitude) )
  }
}
