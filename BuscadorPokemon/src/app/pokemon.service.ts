import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Pokemon {
  name: string;
  image: string;
  id: number;
}

interface PokeApiResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
}

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private readonly baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  getPokemon(nameOrId: string): Observable<Pokemon> {
    const query = nameOrId.trim().toLowerCase();
    return this.http.get<PokeApiResponse>(`${this.baseUrl}/${query}`).pipe(
      map((res) => ({
        id: res.id,
        name: res.name,
        image:
          res.sprites.other?.['official-artwork']?.front_default ??
          res.sprites.front_default ??
          '',
      })),
    );
  }
}
