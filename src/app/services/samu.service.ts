import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import { UF } from '../types/uf';

@Injectable()
export class SamuService {

  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }

  getMunicipioMedia(id: number): number {
    let uf: UF;
    let soma = 0;
    let qtd = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === id)
      {
        soma += entrada.valor;
        qtd++;
      }
    }
    return Math.round(soma/qtd);
  }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Dados[] {
    let ano: Dados[] = [];
    let i = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === uf.id)
      {
        ano[i] = entrada;
        i++;
      }
    }
    return ano;
  }
}
