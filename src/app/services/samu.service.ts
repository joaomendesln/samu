import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SamuService {

  constructor(private http: Http) { }

  private samuUrl = "http://api.pgi.gov.br/api/1/serie/27.json";

  getAllMunicipiosAtendidosPorEstado(): Promise<Dados[]> {
    return this.http.get(this.samuUrl)
               .toPromise()
               .then(response => response.json().data as Dados[])
               .catch(this.handleError);
  }

  getMunicipioMedia(id: number): Promise<number> {
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
    return Promise.resolve(Math.round(soma/qtd));
  }

  // getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
  //   return this.getAllMunicipiosAtendidosPorEstado()
  //              .then(dados => dados.filter(dados => dados.estado_ibge === uf.id))
  //              .catch(this.handleError);
  // }

  getPorUFMunicipiosAtendidosPorEstado(uf: UF): Promise<Dados[]> {
    let ano: Dados[] = [];
    let i = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === uf.id)
      {
        ano[i] = entrada;
        i++;
      }
    }
    return Promise.resolve(ano);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }
}
