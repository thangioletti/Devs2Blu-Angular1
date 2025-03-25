import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardComponent, CardComponent, CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  protected cidades: Array<Cidade> = [
    {
      nome: 'blumenau',
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyn0pFN4pFCbtKaKmnBrQOZtXoO4jycTCAJg&s",
      descricao: 'cidade legal'
    },
    {
      nome: 'indaial',
      imagem: "https://habitability.com.br/wp-content/uploads/2022/04/Cidadade-compacta-680x405.png",
      descricao: 'cidade legal'
    },
    {
      nome: 'gaspar',
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyn0pFN4pFCbtKaKmnBrQOZtXoO4jycTCAJg&s",
      descricao: 'cidade legal'
    },
    {
      nome: 'timbo',
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyn0pFN4pFCbtKaKmnBrQOZtXoO4jycTCAJg&s",
      descricao: 'cidade legal'
    },
    {
      nome: 'ascurra',
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyn0pFN4pFCbtKaKmnBrQOZtXoO4jycTCAJg&s",
      descricao: 'cidade legal'
    }
  ];
}

export type Cidade = {
  nome: string;
  imagem: string;
  descricao: string;
};
