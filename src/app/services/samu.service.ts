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

  getMedias(ufs: UF[]): number[] {
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

  /*getPorUFMunicipiosAtendidosTotas(ufs: UF[]): Dados[] {
    let atendimentos: Dados[] = [][];
    let i = 0;
    let j = 0;
    for (let uf of ufs){
      for (let entrada of VALORES){
        atendimentos[i] = [];
        if(entrada.uf_id === uf.id)
        {
          atendimentos[j][i] = entrada;
          i++;
        }
      }
      i = 0;
      j++;
    }
    return atendimentos;
  }*/
}
