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

  private addDado(ano: number, valor: number, uf:UF, atendimentos: Total[]) : void {
    let total : Total = atendimentos.find(dado => dado.uf.id === uf.id, undefined);

    if (!total) {
      total = new Total(uf);
      atendimentos.push(total);
    }

    total.dados.push(new Dado(ano, valor));
  }

  getPorUFMunicipiosAtendidosPorEstadoTodas(ufs: UF[]): Total[] {
    let atendimentos: Total[] = [];


    for(let entrada of UFs)
    {
      let dadosUF = this.getPorUFMunicipiosAtendidosPorEstadoUnica(entrada.id);
      for (let dadoUF of dadosUF)
      {
        this.addDado(dadoUF.ano, dadoUF.valor, entrada, atendimentos);
      }
    }
    return atendimentos;
  }

  private encontrarUF(uf: UF, dados: Total[]) : Total {
    let itens = dados.find(dado => dado.uf.id === uf.id);
    if (itens == undefined) new Total(uf);
    return itens[0];
  }

}
