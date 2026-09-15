import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorPokemonComponent } from './buscador-pokemon.component';
import { BulbasaurComponent } from '../bulbasaur/bulbasaur.component';
import { ShinxComponent } from '../shinx/shinx.component';
import { SnorlaxComponent } from '../snorlax/snorlax.component';
import { SquirtleComponent } from '../squirtle/squirtle.component';
import { EeveeComponent } from '../eevee/eevee.component';
import { CharmanderComponent } from '../charmander/charmander.component';

@Component({
  selector: 'app-buscador-pokemon',
  standalone: true,
  imports: [
    BulbasaurComponent,
    ShinxComponent,
    SnorlaxComponent,
    SquirtleComponent,
    EeveeComponent,
    CharmanderComponent
  ],
  templateUrl: './buscador-pokemon.component.html',
  styleUrl: './buscador-pokemon.component.css'
})

describe('BuscadorPokemonComponent', () => {
  let component: BuscadorPokemonComponent;
  let fixture: ComponentFixture<BuscadorPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
