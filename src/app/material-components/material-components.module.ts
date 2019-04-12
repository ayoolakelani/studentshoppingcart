import {MatButtonModule, MatCheckboxModule,
   MatToolbarModule, MatIconModule, MatListModule,
   MatMenuModule ,MatSidenavModule,MatTabsModule, 
   MatChipsModule, MatAutocompleteModule,
    MatFormFieldModule, MatCardModule, MatSelectModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule,} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports:
  [
   
    MatCheckboxModule, 
    MatToolbarModule,
    MatIconModule, 
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatSidenavModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
    
    
  ],
  exports: 
  [
   
     MatCheckboxModule, 
     MatToolbarModule,
     MatIconModule, 
     MatButtonModule,
     MatListModule,
     MatMenuModule,
     MatTabsModule,
     MatSidenavModule,
     MatChipsModule,
     MatAutocompleteModule,
     MatFormFieldModule,
     MatCardModule,
     MatSelectModule,
     MatInputModule,
     MatTableModule,
     MatPaginatorModule,
     MatSortModule
  ],
})
export class MaterialComponentsModule { }
