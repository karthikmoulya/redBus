import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './auth/home/home.component';
import { HeaderComponent } from './auth/header/header.component';
import { FooterComponent } from './auth/footer/footer.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HotelsComponent } from './auth/hotels/hotels.component';
import { BusshireComponent } from './auth/busshire/busshire.component';
import { BusticketsComponent } from './auth/bustickets/bustickets.component';
import { SearchComponent } from './auth/search/search.component';
import { ManagebookingComponent } from './auth/managebooking/managebooking.component';
import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { SliderComponent } from './auth/slider/slider.component';
import { BustextComponent } from './auth/bustext/bustext.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    HotelsComponent,
    BusshireComponent,
    BusticketsComponent,
    SearchComponent,
    ManagebookingComponent,
    PagenotfoundComponent,
    SliderComponent,
    BustextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
