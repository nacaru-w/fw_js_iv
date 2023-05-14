import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/article-quantity-change';
@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})

export class ArticleListComponent implements OnInit {

  public articles: Array<Article>;

  constructor() { }

  ngOnInit(): void {
    this.articles = [
      {
        name: 'Consola',
        imageUrl: 'assets/images/ClassicPortable.svg',
        price: 80,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        name: 'Mochila',
        imageUrl: 'assets/images/Backpack.svg',
        price: 40,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        name: 'Móvil',
        imageUrl: 'assets/images/Phone.svg',
        price: 130,
        isOnSale: false,
        quantityInCart: 0
      }
    ]
  }

}
