import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'



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

    constructor(private ufService: UFService, private samuService: SamuService)
    { }

    ngOnInit(): void {
        this.ufService.getPorID(this.id).then(uf => this.uf = uf);
        //this.samuService.getMunicipioMedia(this.id).then(media => this.media = media);
    }
}
