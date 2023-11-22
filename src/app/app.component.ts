import { Component, VERSION } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs-compat/observable';
import { ArticleState } from 'src/shared/states/article-state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp04-hell-Maxime';

  @Select(ArticleState.getNbArticles) nb$!: Observable<number>;
  constructor() {}
}
