import { Injectable } from '@angular/core';

import { Dados } from '../types/samu';
import { VALORES } from './mock-samu_municipios_atendidos_por_estado';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

import { Total, Dado } from '../types/total';

@Injectable()
export class TotalService {
  getAllMunicipiosAtendidosPorEstado(): Dados[] {
    return VALORES;
  }
  getAll(): UF[] {
    return UFs;
  }

  getIDs() : number []
  {
    let ids: number[] = [];
    for (let entrada of UFs){
      ids.push(entrada.id);
    }
    return ids;
  }

  getPorID(id: number) : UF
  {
    let uf: UF;
    for (let entrada of UFs){
      if (entrada.id === id)
      {
          uf = entrada;
          break;
      }
    }
    return uf;
  }

  getPorUFMunicipiosAtendidosPorEstadoUnica(id: number): Dados[] {
    let ano: Dados[] = [];
    let i = 0;
    for (let entrada of VALORES){
      if(entrada.uf_id === id)
      {
        ano[i] = entrada;
        i++;
      }
    }
    return ano;
  }

  getPorUFMunicipiosAtendidosPorEstadoTodas(ufs: UF[]): Total[] {
    let atendimentos: Total[] = [];
    // let dados: Dados[] = [];
    // let uf: UF;
    // let i = 0;
    // let j = 0;
    for (let entrada of UFs){
      let uf = this.getPorID(entrada.id);
      let dados = this.getPorUFMunicipiosAtendidosPorEstadoUnica(entrada.id);

      let atendimento = this.encontrarUF(uf, atendimentos);

      dados.forEach((dado) => {
        atendimento.valores.push(dado.valor);
        atendimento.anos.push(dado.ano);
        atendimento.dados.push({ano: dado.ano, valor: dado.valor});
        atendimento.dados[0].ano;
        // dado.uf.[id | nome | area]
        // dado.dados.[ano | valor]
      });

      // let atendimento = new Total();
      // atendimentos[i].uf = this.getPorID(entrada.id);
      // dados = this.getPorUFMunicipiosAtendidosPorEstadoUnica(entrada.id);
      // for (let dado of dados)
      // {
      //   atendimentos[i].valores[j] = dado.valor;
      //   atendimentos[i].anos[j] = dado.ano;
      //   j++;
      // }
      // i++;
      // j = 0;
    }
    return atendimentos;
  }

  private encontrarUF(uf: UF, dados: Total[]) : Total {
    let itens = dados.find(dado => dado.uf.id === uf.id);
    if (itens == undefined) new Total(uf);
    return itens[0];
  }
}
