
import { product } from './../../models/product';
import { categories } from '../../models/categories';

import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
 

  constructor(private afs : AngularFirestore) {
     
  }

  Save(product)
  {
    return this.afs.collection("products").add(product);
  }

  Update(product : product)
  {
    const userRef = this.afs.doc<product>(`products/${product.id}`);
    console.log(product.id);
    return userRef.set(product, {merge : true})
  }

  Delete(productId: string): any {
    return this.afs.doc<product>(`products/${productId}`).delete();
  }


  getProducts()
  {
    return this.afs.collection("products").snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
      const data = a.payload.doc.data() as product;
      data.id = a.payload.doc.id;
      return data;
    });
  }));
  }

   getCategories(category : string) : Observable<categories[]>
  {
   
    var categories = this.afs.collection<categories>(category, ref => ref.orderBy("name")).snapshotChanges()
    .pipe(
     
      map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as categories;
          data.id = a.payload.doc.id
            //Use spread operator to add the id to the document data
          return data;
        });
      }));  
      return categories;
    
  }

  getSubs(category : string) 
  {
   
    var subs =  this.afs.collection(category, ref => ref.orderBy("name")).snapshotChanges()
    .pipe(
     
      map(actions => {
        return actions.map(a => {
          //Get document data
          const data = a.payload.doc.data() as categories;
          data.id = a.payload.doc.id
            //Use spread operator to add the id to the document data
          return data;
        });
      }));

      var ret =  subs.subscribe(res => {return res});
    
  }
 
  getProduct(productId)
  {
    return this.afs.doc<product>(`products/${productId}`).valueChanges();
  }
  
 
}

