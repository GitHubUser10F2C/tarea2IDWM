import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { TableComponent } from '../../components/table/table.component';
import { Result } from '../../interfaces/Result';

@Component({
  selector: 'character-list',
  imports: [ButtonComponent,TableComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  characters: Result[] = [];

  updateCharacters(characters: Result[]): void {
    this.characters = characters;
    console.log('Personajes actualizados en ListComponent:', this.characters);
  }
}
