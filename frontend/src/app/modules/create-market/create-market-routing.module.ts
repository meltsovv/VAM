import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeaderComponent } from './components/create-header/create-header.component';
import { CreateMarketComponent } from './create-market.component';

const routes: Routes = [
  {
    path: '',
    component: CreateMarketComponent,
    children: [
      {
        path: 'header',
        component: CreateHeaderComponent,
      },
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
export class CreateMarketRoutingModule {}
