import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing, appRoutingProviders } from './app.routing';

import { Componente01Component} from './componente01/componente01.component';

import { HeaderComponent } from './components/header.component/header.component'
import { MaterialModule } from './material-module';
import { Page02Component } from './page02.component/page02.component';
import { Page03Component } from './page03.component/page03.component';
import {Page01Module} from './page01.component/page01.module'
@NgModule({
  declarations: [
    AppComponent,
    Componente01Component,
    HeaderComponent,
    Page02Component,
    Page03Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Page01Module,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
