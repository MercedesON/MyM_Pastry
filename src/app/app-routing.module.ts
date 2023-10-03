import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';

const routes: Routes = [
  {path: '',redirectTo: '/inicio',pathMatch:'full'},
  {path: 'contacto', component: ContactoComponent},
  // {path: '**',redirectTo: ''},  
  {path:'app-login-container', component:LoginContainerComponent}
  // { path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}