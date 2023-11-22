import { AppRoutingModule } from './app-routing.module';
//import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser/';
//import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
//import { ServiciosComponent } from './components/servicios/servicios.component';
//import { VisionComponent } from './components/vision/vision.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { AboutComponent } from './components/about/about.component';
import{HomeComponent}from './components/home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
//Modulos
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SwiperModule } from 'swiper/angular';

//Carousel Owl
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//-------------------------//

// import { CarouselResponsiveModule } from 'primeng/carousel';
// import { TagModule } from 'primeng/tag';
// import { ButtonModule } from 'primeng/button';
//Components
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddTokenInterceptor } from './utils/add-token.interceptor';
import { CakesComponent } from './components/cakes/cakes.component';
import { SnacksComponent } from './components/snacks/snacks.component';
import { ComplementaryComponent } from './components/complementary/complementary.component';
import { CakeManagerComponent } from './components/cake-manager/cake-manager.component';
import { SnackManagerComponent } from './components/snack-manager/snack-manager.component';
import { ComplementaryManagerComponent } from './components/complementary-manager/complementary-manager.component';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SignInComponent,
    SignUpComponent,  
    FooterComponent,
    HomeComponent,     
    AboutComponent, 
    ContactComponent,
    LoginContainerComponent,
    SpinnerComponent,
    DashboardComponent,
    CakesComponent,
    SnacksComponent,
    ComplementaryComponent,
    CakeManagerComponent,
    SnackManagerComponent,
    ComplementaryManagerComponent
   
  ],
  imports: [        
    AppRoutingModule,
    HttpClientModule,    
    FormsModule,
    SwiperModule,
    //Carousel OWL
    BrowserModule,
    CarouselModule, 
    BrowserAnimationsModule,
    //---------------------//
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    
    FontAwesomeModule, 
    ReactiveFormsModule,
    SwiperModule,
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
    // CarouselResponsiveModule,
    // TagModule,
    // ButtonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    // error solution NullInjectError
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

