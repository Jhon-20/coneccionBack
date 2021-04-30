import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [NavbarComponent, SliderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[
    NavbarComponent,
    
  ]
})
export class SharedModule { }
