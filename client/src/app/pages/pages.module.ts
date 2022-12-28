import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { TerminalComponent } from '../shared/terminal/terminal.component';
import { IntroComponent } from '../shared/intro/intro.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    TerminalComponent,
    IntroComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports : [
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
