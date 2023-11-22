import { Component } from '@angular/core';
import { NgxsOnInit, Select, Store } from '@ngxs/store';
import { Article } from '../../shared/models/article';
import { DelArticle } from '../../shared/actions/article-actions';
import { ArticleState } from '../../shared/states/article-state';
import { Observable } from 'rxjs-compat/observable';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent {
  constructor(private store: Store) {}

  @Select(ArticleState.getListeArticles) liste$!: Observable<Article[]>;
  ngOnInit() {}

  delArticle(c: Article): void {
    this.store.dispatch(new DelArticle(c));
  }
}
