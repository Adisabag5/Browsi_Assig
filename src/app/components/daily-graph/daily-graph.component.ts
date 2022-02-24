import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { GraphComponentContent, graphData } from 'src/app/utils/constants';



@Component({
  selector: 'app-daily-graph',
  templateUrl: './daily-graph.component.html',
  styleUrls: ['./daily-graph.component.scss']
})
export class DailyGraphComponent implements OnInit, GraphComponentContent {

  view: any;
  list: graphData | undefined;

  constructor(
    private store: StoreService
  ) {
    this.view = [innerWidth / 1.3, innerHeight*0.3];
   }

  ngOnInit(): void {
   this.setListObserver();
  }

  setListObserver(){
    this.store.dailyWeatherObserver.subscribe(
      (rest: graphData) => this.list = rest 
    );
  }

  onResize(event: any) {
      this.view = [event.target.innerWidth / 1.35, event.target.innerHeight * 0.3];
  }

}
