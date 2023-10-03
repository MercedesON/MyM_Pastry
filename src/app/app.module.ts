import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { BrowserModule } from '@angular/platform-browser/';

//import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SwiperModule } from 'swiper/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavbarComponent } from './components/navbar/navbar.component';
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
import { ServiciosComponent } from './components/servicios/servicios.component';
import { VisionComponent } from './components/vision/vision.component';
import { BocaditosComponent } from './components/bocaditos/bocaditos.component';
import { ComplementosComponent } from './components/complementos/complementos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [ AppComponent, 
    FooterComponent, 
    CarouselComponent, 
    NavbarComponent,
    TortasComponent, ServiciosComponent, VisionComponent, BocaditosComponent, ComplementosComponent, ContactoComponent, LoginContainerComponent, SignUpComponent, SignInComponent
  ],
  imports: [AppRoutingModule,
   BrowserAnimationsModule,
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
    MdbCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

