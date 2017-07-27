import { UF } from '../types/uf';

export class Total {
    dados : Dado[] = [];
    valores: number[];
    uf: UF;
    anos: number[];

    constructor(uf: UF) {
      this.uf = uf;
    }
}

export class Dado {
  ano: number;
  valor: number;
  constructor(ano: number, valor: number) {
    this.ano = ano;
    this.valor = valor;
  }
}
