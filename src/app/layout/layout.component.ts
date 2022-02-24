import { Component, OnInit } from '@angular/core';
import { GraphService } from '../services/graph.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  constructor(
    private graphService: GraphService,
    private store: StoreService
  ) 
  {  }

  ngOnInit(): void {
    if(!(localStorage.getItem("latitude"))){
      this.store.setLocalStorage();
    }else{
      this.store.setCoordinates(Number(localStorage.getItem("latitude")), Number(localStorage.getItem("longitude")));
    }
    this.graphService.fetchWeatherDataByUserInput(this.store.latitude, this.store.longitude);
  }

 


}
