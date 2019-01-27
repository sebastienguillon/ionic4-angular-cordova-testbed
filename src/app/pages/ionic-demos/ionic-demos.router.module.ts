import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicDemosPage } from './ionic-demos.page';
import { IonGridPage } from './ion-grid/ion-grid.page';

const routes: Routes = [
  {
    path: '',
    component: IonicDemosPage,
    children: [
      {
        path: 'ion-grid',
        children: [
          {
            path: '',
            loadChildren: './ion-grid/ion-grid.module#IonGridPageModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IonicDemosRoutingModule {}
