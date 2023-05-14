import { Component, OnInit } from '@angular/core';
import { Article } from '../model/article';
import { ArticleQuantityChange } from '../model/article-quantity-change';
@Component({
  selector: 'app-article-list',
  template: `<app-article-item [article]="article" (quantityChange)="onQuantityChange($event)" *ngFor="let article of articles; index as i"></app-article-item>`,
  styles: [`
  app-article-item {
    margin: 1em;
  }
  
  `]
})

export class ArticleListComponent implements OnInit {

  public articles: Array<Article>;

  constructor() { }

  ngOnInit(): void {
    this.articles = [
      {
        id: 1,
        name: 'Consola',
        imageUrl: 'assets/images/ClassicPortable.svg',
        price: 80,
        isOnSale: true,
        quantityInCart: 0
      },
      {
        id: 2,
        name: 'Mochila',
        imageUrl: 'assets/images/Backpack.svg',
        price: 40,
        isOnSale: false,
        quantityInCart: 0
      },
      {
        id: 3,
        name: 'Móvil',
        imageUrl: 'assets/images/Phone.svg',
        price: 130,
        isOnSale: true,
        quantityInCart: 0
      }
    ]

  }

  onQuantityChange(change: ArticleQuantityChange) {
    (console.log(change))
    const articleOnHere = this.articles.find(art => {
      return change.article.id === art.id;
    });
    console.log(articleOnHere)
    articleOnHere!.quantityInCart += change.changeInQuantity;
  }

}
