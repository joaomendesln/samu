import { Injectable } from '@angular/core';

import { UF } from '../types/uf';
import { UFs } from './mock-ufs';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UFService {
  private ufsUrl = 'api/ufs';  // URL to web api
  private uf : UF = new UF(21, 'Maranhão');

  constructor(private http: Http) { }

  getAll(): Promise<UF[]> {
    return Promise.resolve([this.uf]);
    // return this.http.get(this.ufsUrl)
    //            .toPromise()
    //            .then(response => response.json().data as UF[])
    //            .catch(this.handleError);
  }

  getPorID(id: number) : Promise<UF>  {
    return Promise.resolve(this.uf);
    // return this.getAll().then(ufs => ufs.find(uf => uf.id === id))
    //                     .catch(this.handleError);
  }

  /*getUFs() : Promise<UF[]>  {
    let uf: UF[] = [];
    for (let entrada of UFs){
      uf.push(entrada);
    }
    return Promise.resolve(uf);
  }*/


  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }
}
