import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: '**',
    loadChildren: './pages/error/error.module#ErrorPageModule',
    pathMatch: 'full'
  },  { path: 'status-bar', loadChildren: './pages/native-demos/status-bar/status-bar.module#StatusBarPageModule' },
  { path: 'stencil-demos', loadChildren: './pages/angular-demos/stencil-demos/stencil-demos.module#StencilDemosPageModule' },
  { path: 'stencil-basic', loadChildren: './pages/angular-demos/stencil-basic/stencil-basic.module#StencilBasicPageModule' },
  { path: 'ion-slides', loadChildren: './pages/ionic-demos/ion-slides/ion-slides.module#IonSlidesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
