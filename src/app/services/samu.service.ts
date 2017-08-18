import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

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

  /*getMedias(ufs: UF[]): number[] {
    let soma = 0;
    let qtd = 0;
    let medias: number[];
    for (let uf of ufs){
      for (let entrada of VALORES){
        if(entrada.uf_id === uf.id)
        {
          soma += entrada.valor;
          qtd++;
        }
      }
      medias.push(Math.round(soma/qtd));
      soma = 0;
      qtd = 0;
    }
    return medias;
  }*/

  getPorUFMunicipiosAtendidosPorEstado(id: number): Dados[] {
    let dados: Dados[] = [];
    let i = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === id)
      {
        dados[i] = entrada;
        i++;
      }
    }
    return dados;
  }
}
