import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMarketComponent } from './create-market.component';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { CreateMarketRoutingModule } from './create-market-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CreateGetStartedComponent } from './components/create-get-started/create-get-started.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CreateMarketComponent,
    CreateHeaderComponent,
    CreateGetStartedComponent
  ],
  imports: [
    CommonModule,
    CreateMarketRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CreateMarketModule { }
