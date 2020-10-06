import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CubeDisplayComponent } from './cube-display/cube-display.component';
import { SplashPageComponent } from './splash-page/splash-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CubeDisplayComponent,
    SplashPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
