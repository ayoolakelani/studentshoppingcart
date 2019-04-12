import { ProductService } from './../services/data/products.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../models/product';
import { categories } from '../models/categories';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$ : Observable<product[]>;
  categories$ : Observable<categories[]>;
  constructor(private productService : ProductService) { }

  ngOnInit() {
   this.products$ =  this.productService.getProducts();
   this.categories$ = this.productService.getCategories("product-categories");
   
  }

}
