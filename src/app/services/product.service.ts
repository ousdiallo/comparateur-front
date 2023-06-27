import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://localhost:8090/api/products';

    constructor(private http: HttpClient) { }

    getAllProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiUrl);
    }

    searchProducts(keywords: string, useAdvancedSearch: boolean): Observable<Product[]> {
        let searchUrl = `${this.apiUrl}/searchbasic`;
        if (useAdvancedSearch) {
            searchUrl = `${this.apiUrl}/search`;
        }
        return this.http.get<Product[]>(`${searchUrl}?k=${keywords}`);
    }
}
