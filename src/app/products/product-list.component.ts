import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'First Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean = false;

    products: IProduct[];
    filteredProducts: IProduct[];

    _listFilter: string = '';

    constructor(private _productService: ProductService)   {
    }

    get listFilter() :string {
        return this._listFilter
    }

    set listFilter(value: string ) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }   

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        return this.products.filter(( product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1 );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List '+ message;
    }

}

