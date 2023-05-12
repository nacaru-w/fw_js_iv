import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})

export class ArticleItemComponent {

  public article: Article;

  constructor() { }

  ngOnInit() {

    this.article = {
      name: 'Consola',
      imageUrl: 'assets/images/ClassicPortable.svg',
      price: 80,
      isOnSale: true,
      quantityInCart: 0
    }

  }

  addtoCart() {
    this.article.quantityInCart += 1;
  }

  removeFromCart() {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart -= 1;
    }
  }

  disableButton() {
    return !Boolean(this.article.quantityInCart)
  }

}
