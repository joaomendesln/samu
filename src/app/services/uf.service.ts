import { Injectable } from '@angular/core';

import { UF } from '../types/uf';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UFService {
  private ufsUrl = 'api/ufs';  // URL to web api

  constructor(private http: Http) { }

  getAll(): Promise<UF[]> {
    return this.http.get(this.ufsUrl)
               .toPromise()
               .then(response => response.json().data as UF[])
               .catch(this.handleError);
  }

  getPorID(id: number) : Promise<UF>  {
    return this.getAll().then(ufs => ufs.find(uf => uf.id === id))
                        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error);
    return Promise.reject(error.message || error);
  }
}
