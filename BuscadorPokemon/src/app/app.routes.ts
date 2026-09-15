import { Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BuscadorPokemonComponent } from './components/buscador-pokemon/buscador-pokemon.component';
import { BulbasaurComponent } from './components/bulbasaur/bulbasaur.component';
import { CharmanderComponent } from './components/charmander/charmander.component';
import { EeveeComponent } from './components/eevee/eevee.component';
import { ShinxComponent } from './components/shinx/shinx.component';
import { SnorlaxComponent } from './components/snorlax/snorlax.component';
import { SquirtleComponent } from './components/squirtle/squirtle.component';

export const routes: Routes = [

  {path: '',redirectTo: 'registro',pathMatch: 'full'},
  {path: 'registro',component: RegistroUsuarioComponent},
  {path: 'buscador',component: BuscadorPokemonComponent},
  {path: 'bulbasaur',component: BulbasaurComponent},
  {path: 'charmander',component: CharmanderComponent},
  {path: 'eevee',component: EeveeComponent},
  {path: 'shinx',component: ShinxComponent},
  {path: 'snorlax',component: SnorlaxComponent},
  {path: 'squirtle',component: SquirtleComponent},
  {path: '**',redirectTo: 'registro'}

];