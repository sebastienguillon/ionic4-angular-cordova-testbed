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
  },  { path: 'status-bar', loadChildren: './pages/native-demos/status-bar/status-bar.module#StatusBarPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
