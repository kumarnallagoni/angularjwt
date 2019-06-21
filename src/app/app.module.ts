import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpClientModule}                       from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule}       from '@angular/core';
import {FormsModule}                            from '@angular/forms';
import {BrowserModule}                          from '@angular/platform-browser';
import {BrowserAnimationsModule}                from '@angular/platform-browser/animations';
import {AppRoutingModule}                       from './app-routing.module';
import {AppComponent}                           from './app.component';
import {FootercomponentComponent}               from './footercomponent/footercomponent.component';
import {HomeComponent}                          from './home/home.component';
import {LoginComponent}                         from './login/login.component';

import {UserdataService}      from './service/user.service';
import {SignupComponent}      from './signup/signup.component';
import {VideocenterComponent} from './videocenter/videocenter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocenterComponent,
    SignupComponent,
    LoginComponent,
    FootercomponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, UserdataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
