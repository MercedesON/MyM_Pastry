import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import {AboutComponent}from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import{HomeComponent}from './components/home/home.component'
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import { DashboardComponent } from './components/dashboard/dashboard.component';
//import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'login-container',component:LoginContainerComponent},
  {path:'login',component: SignInComponent},
  {path:'register',component:SignUpComponent},
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

  // { path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}