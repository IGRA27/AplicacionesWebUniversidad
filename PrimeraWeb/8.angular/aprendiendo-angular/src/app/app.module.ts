import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibroComponent } from './libro/libro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';
import { AppRoutingModule } from './app-routing.module';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LibroComponent,
    ContactoComponent,
    HomeComponent,
    ExternoComponent,
    ZapatillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
