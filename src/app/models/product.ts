import { ProductService } from './../services/data/products.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface product {
    id : string;
    name : string;
    category : string;
    description : string;
    price : number;
    imageUrl : string;
     
}

export class ProductDataSource extends DataSource<any> {
    constructor(private userService: ProductService) {
      super();
    }
    connect(): Observable<product[]> {
      return this.userService.getProducts().pipe(map(a => { 
        
        return a  as product[]}));
    }
    disconnect() {}
  }
