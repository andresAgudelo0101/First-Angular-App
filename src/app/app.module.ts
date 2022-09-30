import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/home/index/index.component';
import { GetRandomUserComponent } from './components/random-user/get-random-user/get-random-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GetRandomUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
