import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})

export class ArticleItemComponent implements OnInit {

  @Input() public article: Article;
  public articleClasses: any;

  constructor() { }

  ngOnInit(): void {
    this.articleClasses = {
      "not-on-sale": !this.article.isOnSale
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
