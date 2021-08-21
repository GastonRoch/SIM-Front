import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimerTPComponent } from './components/primerTP/primerTP.component';
import { SegundoTPComponent } from './components/segundoTP/segundoTP.component';
import { TercerTPComponent } from './components/tercerTP/tercerTP.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
