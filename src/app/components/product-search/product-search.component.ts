import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  keywords!: string;
  useAdvancedSearch!: boolean;
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.keywords = '';
    this.useAdvancedSearch = false;
    this.products = [];
  }

  searchProducts(): void {
    if (this.keywords.trim() !== '') {
      this.productService.searchProducts(this.keywords, this.useAdvancedSearch).subscribe(
        (results: Product[]) => {
          this.products = results;
          console.log(this.products);
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la recherche des produits :', error);
        }
      );
    }
  }


}
