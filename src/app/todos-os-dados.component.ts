import { Component, OnInit } from '@angular/core';

import {UF} from './types/uf';
import {UFService} from './services/uf.service'

import {Dados} from './types/samu';
import {SamuService} from './services/samu.service'

import {UFs} from './services/mock-ufs'

import { Total } from './types/total';
import { TotalService } from './services/total.service'

@Component({
  selector: 'app-root',
  templateUrl: './todos-os-dados.component.html',
  styleUrls: ['./app.component.css'],
})
export class TodosOsDadosComponent implements OnInit {
  title = 'app';
  dados_da_samu : Dados[];
  uf: UF;
  id = 21;
  ids: number[];
  ufs: UF[];
  atendimentos: Total[];

  constructor(private ufService: UFService, private samuService: SamuService, private totalService: TotalService)
  { }

  ngOnInit(): void {
      this.dados_da_samu = this.samuService.getAllMunicipiosAtendidosPorEstado();
      this.uf = this.ufService.getPorID(this.id);
      this.ufs = this.ufService.getUFs();
      this.atendimentos = this.totalService.getPorUFMunicipiosAtendidosPorEstadoTodas(this.ufs);
  }

}
