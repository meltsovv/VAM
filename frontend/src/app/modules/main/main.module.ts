import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './components/main-landing/main-landing.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';



@NgModule({
  declarations: [
    MainLandingComponent,
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }
