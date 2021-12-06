import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMarketDesignComponent } from './create-market-design.component';

const routes: Routes = [
  {
    path: '',
    component: CreateMarketDesignComponent,
    children: [
      // {
      //   path: '/some-router',
      //   component: Some-component,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMarketDesignRoutingModule {}
