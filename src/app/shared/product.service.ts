import { Injectable } from '@angular/core';
import { Product }  from './Product';

@Injectable()
export class ProductService {

  products:Product[] = [];

  constructor() { }

  addProduct(product:Product){
    this.products = [...this.products, product];
 
}

getStudents(): Product[]{
    return this.products;
}
}
