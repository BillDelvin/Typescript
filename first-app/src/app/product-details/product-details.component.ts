import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-products-detail',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
    product;

    constructor(private route: ActivatedRoute, private cartService: CartService ) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get('productId')];
        })
    }

    addToCart(product){
        window.alert('your product has been added to the cart!');
        this.cartService.addToCart(product);
    }

}