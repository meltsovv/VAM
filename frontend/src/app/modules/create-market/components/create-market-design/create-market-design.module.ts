import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMarketDesignRoutingModule } from './create-market-design-routing.module';
import { CreateMarketDesignComponent } from './create-market-design.component';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CreateMarketDesignComponent, CreateHeaderComponent],
  imports: [
    CommonModule,
    CreateMarketDesignRoutingModule,
    SharedModule
  ]
})
export class CreateMarketDesignModule { }
