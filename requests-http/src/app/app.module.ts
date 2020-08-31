import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CursosModule } from './cursos/cursos.module';
import { EnviarValorService } from './unsubscribe-rxjs/enviar-valor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CursosModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
