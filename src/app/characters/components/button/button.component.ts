import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Welcome } from '../../interfaces/Welcome';
import { Result } from '../../interfaces/Result';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'character-button',
  imports: [HttpClientModule,FormsModule],
  providers: [CharacterService],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  private characterService: CharacterService = inject(CharacterService);

  @Output() charactersLoaded = new EventEmitter<Result[]>();

  currentPage: number = 0;
  totalPages: number = 1;
  searchQuery: string = '';
  searchQueryInternal: string = '';


  constructor() {
  }

  ngOnInit(): void {
    this.goToNextPage(); // Llama a getCharacters para cargar la primera página automáticamente
  }

  getCharacters() {
    let queryParams = `page=${this.currentPage}`; // Inicializa el queryParams con la página
    if (this.searchQuery) { // Si hay algo en searchQuery, lo agregamos al query
      queryParams += `&name=${this.searchQuery}`;
    }

    this.characterService.getAllCharacters(queryParams).then((characters) => {
      this.charactersLoaded.emit(characters.results);
      this.totalPages = characters.info.pages;
    }).catch((error) => {
      console.log(error);
    });
  }

  goToNextPage(){
    if (this.currentPage < this.totalPages) { // Verificamos si no estamos en la última página
      this.currentPage++;
      this.getCharacters();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getCharacters();
    }
  }

  searchCharacters() {
    this.searchQuery = this.searchQueryInternal; // Solo actualizamos searchQuery cuando se hace clic en "Buscar"
    this.currentPage = 1; // Reseteamos la página al hacer una nueva búsqueda
    this.getCharacters();
  }

}
