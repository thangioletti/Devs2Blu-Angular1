import { Component } from '@angular/core';
import { ProductItemComponent } from "./components/product-item/product-item.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public products: Array<Product> = [
    {
      name: "Whisky Jim Beam White Kentucky Straight Bourbon 1 litro",
      price: 81.79,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_751784-MLA80097148833_102024-F.webp",
      highlight: true
    },
    {
      name: "Chivas Regal 12 Anos Scotch Escocês 1 L",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_838169-MLU76066193972_052024-F.webp",
      price: 124.88,
      highlight: false
    },
    {
      name: "Jameson Caskmates IPA Edition Irish Whiskey 750mL",
      price: 144.90,
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_912092-MLU76044939878_052024-F.webp",
      highlight: false
    },
    {
      name: "Whisky Buffalo Trace Bourbon 750 mL",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_841597-MLU74224861077_012024-F.webp",
      price: 169,
      highlight: false
    }
  ];

  public carrinho: Array<Product> = [];

  protected addToChart(product: Product) {
    this.carrinho.push(product);
  }
}

export type Product = {
  name?: string;
  price?: number;
  image?: string;
  highlight?: boolean;
}