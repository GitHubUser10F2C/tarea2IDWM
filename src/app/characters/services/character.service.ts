import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Welcome } from '../interfaces/Welcome';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = "https://rickandmortyapi.com/api";
  public errors: string[] = [];
  private http = inject(HttpClient);

  async getAllCharacters(queryParams: string): Promise<Welcome> {
    try {
      const response = await firstValueFrom(
        this.http.get<Welcome>(`${this.baseUrl}/character?${queryParams}`)
      );
      return Promise.resolve(response);
    } catch (error) {
      console.log('Error en getAllCharactersWithParams', error);
      let e = error as HttpErrorResponse;
      this.errors.push(e.message);
      return Promise.reject(error);
    }
  }
}
