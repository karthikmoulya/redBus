import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './auth/home/home.component';
import { PagenotfoundComponent } from './auth/pagenotfound/pagenotfound.component';
import { HotelsComponent } from './auth/hotels/hotels.component';
import { BusticketsComponent } from './auth/bustickets/bustickets.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'hotels' , component : HotelsComponent},
  {path : 'bustickets' , component : BusticketsComponent},
  {path : 'signin' , component : SigninComponent },
  {path : 'signup' , component : SignupComponent },
  {path : '**' , component : PagenotfoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
