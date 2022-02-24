import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { GraphComponentContent, graphData } from 'src/app/utils/constants';


@Component({
  selector: 'app-hourly-graph',
  templateUrl: './hourly-graph.component.html',
  styleUrls: ['./hourly-graph.component.scss']
})
export class HourlyGraphComponent implements OnInit, GraphComponentContent {

  view: any;
  hourlyTempList: any[] = [];
  list: graphData | undefined;

  constructor(
    private store: StoreService
  ) {
    this.view = [innerWidth / 1.3, innerHeight*0.3];
   }
  

  ngOnInit(): void {
   this.setListObserver();
   
  }
  setListObserver(): void {
    this.store.hourlyWeatherObserver.subscribe(
      (rest: any) => {
         this.hourlyTempList = rest; 
         this.list = rest[0]?.hoursList;
      }
    );  }

  onResize(event: any) {
      this.view = [event.target.innerWidth / 1.35, event.target.innerHeight * 0.3];
  }

  changeDay(event: any){
    console.log(event.value)
    this.hourlyTempList.map((item: any) => {
      if(item.day == event.value){
        this.list = item.hoursList;
      }
    })
  }

}
//32.109333
//34.855499