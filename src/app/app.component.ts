import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UFService, SamuService]
})
export class AppComponent implements OnInit {
    title = 'app';
    id = 21;
    uf: UF;
    qtd: number;
    media: number;
    anos: Dados[];
    ufs : UF[];
    dados_da_samu : Dados[];

    /*for( var tuce = 0; tuce < teste.lenght; tuce++ ) {
        title += tuce;
    }*/

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getUf(this.id);
        this.media = this.samuService.getMunicipioMedia(this.id);
        this.anos = this.samuService.getMunicipioAno(this.id);
    }

    teste = this.ufService + " " + this.samuService;

}
