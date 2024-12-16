import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product = {
    id: 0,
    name: '',
    description: '',
    price: null,
    available: false,
    likes: [],
  };
  productservice: any;

  constructor( productservices  : ProductService) {}

  onSubmit() {

    if (this.product.name && this.product.description && this.product.price > 0) {
      this.product.id = Math.floor(Math.random() * 1000); // Simule un ID unique
      this.productservice.addProduct(this.product); // Ajoute le produit via le service
      alert('Produit ajouté avec succès');

      this.product = { id: 0, name: '', description: '', price: null, available: false, likes: [] };
    }
  }
}
