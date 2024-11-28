import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/Result';

@Component({
  selector: 'character-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() characters: Result[] = [];
}
