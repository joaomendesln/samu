import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './services/in-memory-data.service';

import { UFService } from './services/uf.service';
import { SamuService } from './services/samu.service';
import { TotalService } from './services/total.service';

import { ResumoComponent } from './resumo.component';
import { DadosDaUFComponent } from './dados-da-uf.component';
import { TodosOsDadosComponent } from './todos-os-dados.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumoComponent,
    DadosDaUFComponent,
    TodosOsDadosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: 'resumo',
        component: ResumoComponent
      },
      {
        path: 'dados-da-uf',
        component: DadosDaUFComponent
      },
      {
        path: 'todos-os-dados',
        component: TodosOsDadosComponent
      }
    ])
],
  providers: [UFService, SamuService, TotalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
