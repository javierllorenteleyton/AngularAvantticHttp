import { Component, OnInit } from '@angular/core';
import { Product} from '../shared/Product';
import { ProductService }    from '../shared/Product.Service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  model= new Product(0,0,'','','',0);
  submitted= false;

  constructor(private service: ProductService) { }

  onSubmit() { this.submitted = true;
    console.log('submit');
    
  }
  ngOnInit() {
  }

}
