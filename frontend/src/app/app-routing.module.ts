import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      // {
      //   path: '',
      //   loadChildren: () =>
      //     import('./modules/main-landing/main-landing.module').then((m) => m.MainLandingModule),
      // },
      // {
      //   path: 'not-found',
      //   loadChildren: () =>
      //     import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule),
      // },
      // {
      //   path: '**',
      //   redirectTo: '/not-found',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
