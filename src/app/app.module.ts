import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { PromoSectionComponent } from './promo-section/promo-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { SidebarSectionComponent } from './sidebar-section/sidebar-section.component';
import { RegisterProfessionalComponent } from './register-professional/register-professional.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderBarComponent,
    SliderSectionComponent,
    PromoSectionComponent,
    FooterSectionComponent,
    SidebarSectionComponent,
    RegisterProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
