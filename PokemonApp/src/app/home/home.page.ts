import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  pokemons: any[] = [];
  offset = 0;
  limit = 20;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe((response) => {
      const results = response.results;
      results.forEach((poke: any) => {
        this.pokemonService.getPokemonDetails(poke.url).subscribe((details) => {
          this.pokemons.push({
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
          });
        });
      });
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  verDetalhes(id: number) {
    this.router.navigate(['/details', id]);
  }
}
