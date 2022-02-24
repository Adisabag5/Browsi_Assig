import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { LayoutComponent } from './layout/layout.component';
import { GraphComponent } from './components/graph/graph.component';
import { HourlyGraphComponent } from './components/hourly-graph/hourly-graph.component';
import { DailyGraphComponent } from './components/daily-graph/daily-graph.component';
import { MaterialModule } from './utils/material/material.module';
import { UserInputComponent } from './components/user-input/user-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GraphComponent,
    HourlyGraphComponent,
    DailyGraphComponent,
    UserInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    NgxChartsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
