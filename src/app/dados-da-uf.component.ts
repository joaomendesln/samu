import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-dados',
  templateUrl: './dados-da-uf.component.html',
  styleUrls: ['./app.component.css']
})
export class DadosDaUFComponent implements OnInit {
    title = 'app';
    id = 21;
    uf: UF;
    anos: Dados[];
    dados_da_samu : Dados[];
    media: number;

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.samuService.getAllMunicipiosAtendidosPorEstado().then(dados_da_samu => this.dados_da_samu = dados_da_samu);
        this.ufService.getPorID(this.id).then(uf => this.uf = uf);
        this.samuService.getMunicipioMedia(this.id).then(media => this.media = media);
        this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf).then(anos => this.anos = anos);
    }
}
