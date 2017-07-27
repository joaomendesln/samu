import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

//import { Total } from './types/total';
//import { TotalService } from './services/total.service'


@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./app.component.css'],
})
export class ResumoComponent implements OnInit {
    title = 'resumo';
    id = 21;
    ufs: UF[];
    uf: UF;
    media: number;
    //numero = this.totalService.teste();

    constructor(private ufService: UFService, private samuService: SamuService/*, private totalService: TotalService*/)
    { }

    ngOnInit(): void {
        this.ufs = this.ufService.getAll();
        this.uf = this.ufService.getPorID(this.id);
        this.media = this.samuService.getMunicipioMedia(this.id);
        //this.numero = this.totalService.teste();
    }
}
