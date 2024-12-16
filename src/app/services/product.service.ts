import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class ProductService {
  likeProduct(productId: number, userId: number) {
    throw new Error('Method not implemented.');
  }
  private products: any[] = []; 
  constructor() {}

  
  addProduct(product: any): void {
    this.products.push(product);
    console.log('Produit ajouté :', product);
  }

  
  getProducts(): any[] {
    return this.products;
  }

  
  getAvailableProducts(): any[] {
    return this.products.filter(product => product.available);
  }
}
