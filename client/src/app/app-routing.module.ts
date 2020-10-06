import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeDisplayComponent } from './cube-display/cube-display.component'
import { SplashPageComponent } from './splash-page/splash-page.component'


const routes: Routes = [
  { path: '', component: SplashPageComponent },
  { path: 'cube', component: CubeDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
