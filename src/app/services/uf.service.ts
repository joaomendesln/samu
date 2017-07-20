import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

@Injectable()
export class UFService {
  getAll(): UF[] {
    return UFs;
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

  getUFs() : UF []
  {
    let uf: UF[] = [];
    for (let entrada of UFs){
      uf.push(entrada);      
    }
    return uf;
  }
}
