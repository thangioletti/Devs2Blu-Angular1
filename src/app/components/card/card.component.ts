import { Component, Input } from '@angular/core';
import { Cidade } from '../container/container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  public cidade!: Cidade;
}
