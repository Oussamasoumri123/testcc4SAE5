import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Produc } from '../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAvailableProducts();
  }

  onLike(productId: number) {
    const userId = 1; // ID utilisateur statique pour cet exemple
    this.productService.likeProduct(productId, userId);
    this.products = this.productService.getAvailableProducts();
  }
}
export { Product };

