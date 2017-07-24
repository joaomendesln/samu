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
}
