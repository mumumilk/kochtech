//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modules
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { AboutModule } from './about/about.module';

// routing
import { AppRouting } from './app.routing';

//components
import { AppComponent } from './app.component';


import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    AboutModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
