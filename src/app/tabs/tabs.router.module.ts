import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../pages/home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'ionic',
        children: [
          {
            path: '',
            loadChildren: '../pages/ionic-demos/ionic-demos.module#IonicDemosPageModule'
          },
          {
            path: 'ion-grid',
            loadChildren: '../pages/ionic-demos/ion-grid/ion-grid.module#IonGridPageModule'
          },
          {
            path: 'ion-ripple-effect',
            loadChildren: '../pages/ionic-demos/ion-ripple-effect/ion-ripple-effect.module#IonRippleEffectPageModule'
          }
        ]
      },
      {
        path: 'angular',
        children: [
          {
            path: '',
            loadChildren: '../pages/angular-demos/angular-demos.module#AngularDemosPageModule'
          },
          {
            path: 'stencil',
            loadChildren: '../pages/angular-demos/stencil-demos/stencil-demos.module#StencilDemosPageModule'
          },
          {
            path: 'stencil/basic',
            loadChildren: '../pages/angular-demos/stencil-basic/stencil-basic.module#StencilBasicPageModule'
          }
        ]
      },
      {
        path: 'native',
        children: [
          {
            path: '',
            loadChildren: '../pages/native-demos/native-demos.module#NativeDemosPageModule'
          },
          {
            path: 'status-bar',
            loadChildren: '../pages/native-demos/status-bar/status-bar.module#StatusBarPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
