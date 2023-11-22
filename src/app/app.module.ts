import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PanierComponent } from './panier/panier.component';
import { StoreComponent } from './store/store.component';
import { ArticleState } from 'src/shared/states/article-state';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PanierComponent,
    StoreComponent,
    NgModule
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ArticleState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
