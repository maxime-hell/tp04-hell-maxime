import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Article } from '../../shared/models/article';
import { AddArticle } from '../../shared/actions/article-actions';

@Component({
  selector: 'app-saisir-article',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  articleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.articleForm = this.formBuilder.group({
      nom: '',
      prix: '',
      id: '',
    });
  }

  ngOnInit() {}
  addArticle() {
    let nom: string = this.articleForm.value['nom'];
    let prix: number = this.articleForm.value['prix'];
    let id: number = this.articleForm.value['id'];

    let article: Article;

    article = new Article();
    article.nom = nom;
    article.prix = prix;
    article.id = id;

    console.log(article);
    this.articleForm = this.formBuilder.group({
      nom: '',
      prix: '',
      id: '',
    });

    this.store.dispatch(new AddArticle(article));
  }
}
