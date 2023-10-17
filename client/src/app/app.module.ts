import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { BrowserModule } from '@angular/platform-browser/';
//import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSidenavModule} from "@angular/material/sidenav";

import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { TortasComponent } from './components/tortas/tortas.component';
//import { ServiciosComponent } from './components/servicios/servicios.component';
//import { VisionComponent } from './components/vision/vision.component';
import { BocaditosComponent } from './components/bocaditos/bocaditos.component';
import { ComplementariosComponent } from './components/complementarios/complementarios.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
//import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import{HomeComponent}from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent, 
    HomeComponent,     
    AboutComponent, 
    TortasComponent,
    BocaditosComponent,
    ComplementariosComponent,
    ContactComponent,
    LoginContainerComponent,
    SignInComponent    
  ],
  imports: [
    BrowserAnimationsModule,    
    AppRoutingModule,
    FontAwesomeModule, 
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    CarouselModule, 
   FlexLayoutModule,
   MatInputModule, 
    MatSelectModule, 
    MatSelectModule, 
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatBadgeModule,
    MatSidenavModule,
    MdbCarouselModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

