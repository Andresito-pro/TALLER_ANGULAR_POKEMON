import { Component } from '@angular/core';

import { BulbasaurComponent } from '../bulbasaur/bulbasaur.component';
import { CharmanderComponent } from '../charmander/charmander.component';
import { EeveeComponent } from '../eevee/eevee.component';
import { ShinxComponent } from '../shinx/shinx.component';
import { SnorlaxComponent } from '../snorlax/snorlax.component';
import { SquirtleComponent } from '../squirtle/squirtle.component';

@Component({
  selector: 'app-buscador-pokemon',
  standalone: true,
  imports: [
    BulbasaurComponent, CharmanderComponent, EeveeComponent, ShinxComponent, SnorlaxComponent, SquirtleComponent
  ],
  templateUrl: './buscador-pokemon.component.html',
  styleUrl: './buscador-pokemon.component.css'
})
export class BuscadorPokemonComponent {
}
