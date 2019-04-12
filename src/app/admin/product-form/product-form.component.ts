
import { ProductService } from './../../services/data/products.service';
import { categories } from './../../models/categories'; 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/product';
import { take, filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
 categories$ : Observable<categories[]>;
  productForm : FormGroup;
  product : product = {
    id : null,
    category : "",
    description : "",
    imageUrl : "",
    price : 0,
    name : ""
  };
  isEdit = false;
  productId = "";
  constructor(private productService : ProductService, private router : Router, private route : ActivatedRoute) { 
    
    const id = this.route.snapshot.paramMap.get('id');
    if(id)
    {
      this.isEdit = true;
     this.productService.getProduct(id).pipe(take(1)).subscribe(a => 
      {
       // console.log(a);
        this.productId = id;
        this.setValues(a as product);
      }
      )
    }
  }

  ngOnInit() {
    
    this.categories$ = this.productService.getCategories("product-categories");
 
    this.productForm = new FormGroup({
      name : new FormControl('', [Validators.required, Validators.maxLength(60)]),
      price :  new FormControl('', [Validators.required, Validators.min(0.1)]),
      category :  new FormControl('', Validators.required),
      subcategory :  new FormControl(''),
      subsubcategory :  new FormControl(''),
      imageUrl :  new FormControl(''),
      description :  new FormControl(''),
    });
  }

  DeleteProduct()
  {
    if(!confirm("Are you sure you want to delete this product"))
       return;
      this.productService.Delete(this.productId);
      this.router.navigate(["/admin/products"]);
  }

  AddProduct(product)
  {
    if(this.isEdit)
    return this.UpdateProduct(product)
    return this.AddNewProduct(product);
    
  }

  AddNewProduct(product: product)
  {
     this.productService.Save(product);
     this.router.navigate(["/admin/products"]);
  }

  UpdateProduct(product : product)
  {
     product.id =  this.productId
     this.productService.Update(product);
     this.router.navigate(["/admin/products"]);
  }

  setValues(product : product)
  {
    this.productForm.get('name').setValue(product.name);
    this.productForm.get('price').setValue(product.price);
    this.productForm.get('category').setValue(product.category);
    this.productForm.get('imageUrl').setValue(product.imageUrl);
    this.productForm.get('description').setValue(product.description);
  }

}
