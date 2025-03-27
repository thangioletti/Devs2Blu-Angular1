import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../products.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input()
  public product: Product = {};

  @Output()
  public added: EventEmitter<Product> = new EventEmitter<Product>(); 

  protected addChart() {
    this.added.emit(this.product)
  }
}
