import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GraphService } from 'src/app/services/graph.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  userInput: FormGroup;

  constructor(
    public fb: FormBuilder,
    public graphService: GraphService,
    private store: StoreService
    ) 
  { 
    this.userInput = this.fb.group({
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.setReactiveForm();
  }

  setReactiveForm() {
    this.userInput = this.fb.group({
      latitude: [''],
      longitude: ['']
    })
  }

  submitForm(){
    console.log('Submited')
    let lat = this.userInput.value.latitude;
    let lng = this.userInput.value.longitude;
    this.graphService.fetchWeatherDataByUserInput(lat,lng);
    this.store.setCoordinates(lat,lng);
  }

}
