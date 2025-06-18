import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(offset = 0, limit = 20) {
    return this.http.get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetailsById(id: number) {
  return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

   getPokemonDetails(url: string) {
    return this.http.get<any>(url);
  }
}
