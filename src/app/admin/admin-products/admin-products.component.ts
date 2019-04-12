import { ProductService } from './../../services/data/products.service';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { product, ProductDataSource } from 'src/app/models/product';
import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
 products$ : Observable<product[]>;
 displayedColumns: string[] = ['name', 'price', 'category', 'Edit'];
 dataSource = new MatTableDataSource<product>();
 data: product[] = [];
 subscription: Subscription;
 
 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;


  constructor(private productService : ProductService) { 
    this.products$ = this.productService.getProducts();


    //this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource = new ProductDataSource(this.productService);

     
  }

  

  ngOnInit() {
 
   this.subscription = this.products$.subscribe(data => {
      this.dataSource.data =  data as product[];
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
}
  


