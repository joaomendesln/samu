import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

@Component({
  selector: 'app-root',
  templateUrl: './todos-os-dados.component.html',
  styleUrls: ['./app.component.css'],
})
export class TodosOsDadosComponent implements OnInit {
    title = 'todos os dados';
    id = 21;
    uf: UF;
    medias: number[];
    anos: Dados[];
    atendimentos: Dados[][];
    ufs : UF[];
    dados_da_samu : Dados[];
    UFs : UF[];

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
        this.uf = this.ufService.getPorID(this.id);
        this.anos = this.samuService.getPorUFMunicipiosAtendidosPorEstado(this.uf);
        this.UFs = this.ufService.getUFs();
        this.medias = this.samuService.getMedias(this.ufs);
        //this.atendimentos = this.samuService.getPorUFMunicipiosAtendidosTotas(this.UFs);
    } 

}
