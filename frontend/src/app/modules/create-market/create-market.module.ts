import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMarketComponent } from './create-market.component';
import { CreateHeaderComponent } from './components/create-market-design/components/create-header/create-header.component';
import { CreateMarketRoutingModule } from './create-market-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { CreateGetStartedComponent } from './components/create-get-started/create-get-started.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateMarketDesignComponent } from './components/create-market-design/create-market-design.component';



@NgModule({
  declarations: [
    CreateMarketComponent,
    CreateGetStartedComponent,
  ],
  imports: [
    CommonModule,
    CreateMarketRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CreateMarketModule { }
