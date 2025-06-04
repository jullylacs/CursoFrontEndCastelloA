import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { PainelVagasComponent } from './views/painel-vagas/painel-vagas.component';
import { CurriculosComponent } from './views/curriculos/curriculos.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VagasComponent,
    PainelVagasComponent,
    CurriculosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //módulo necessário para que a página faça as requisições HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
