import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './../Model/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  pessoa: Pessoa[];

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/angular-front/pessoas';

  getPessoas() {
    return this.http.get<Pessoa[]>(this.Url);
  }
}
