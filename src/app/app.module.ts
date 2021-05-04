import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutComponent } from './authentication/layout/layout.component';
import { SigninComponent } from './authentication/layout/pages/signin/signin.component';
import { SignupComponent } from './authentication/layout/pages/signup/signup.component';
import { HeaderComponent } from './authentication/layout/shared/header/header.component';
import { FooterComponent } from './authentication/layout/shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
