import { Injectable } from '@angular/core';
import {
  Action,
  Selector,
  State,
  StateContext,
  createSelector,
} from '@ngxs/store';
import { AddArticle, DelArticle } from '../actions/article-actions';
import { ArticleStateModel } from '../states/article-state-mode';
import { Article } from '../models/article';

@State<ArticleStateModel>({
  name: 'articles',
  defaults: {
    articles: [],
  },
})

@Injectable()
export class ArticleState {
  @Selector()
  static getNbArticles(state: ArticleStateModel) {
    return state.articles.length;
  }

  @Selector()
  static getListeArticles(state: ArticleStateModel) {
    return state.articles;
  }

  @Action(AddArticle)
  add(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: AddArticle
  ) {
    const state = getState();
    patchState({
      articles: [...state.articles, payload],
    });
  }

  @Action(DelArticle)
  del(
    { getState, patchState }: StateContext<ArticleStateModel>,
    { payload }: DelArticle
  ) {
    const state = getState();
    patchState({
      articles: state.articles.filter(
        (x) => !(payload.nom == x.nom)
      ),
    });
  }
}