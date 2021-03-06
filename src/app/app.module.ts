import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {QuotesFormComponent} from './quotes-form/quotes-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthorsComponent } from './authors/authors.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { LikeComponent } from './like/like.component';
import { DateAgoPipe } from './date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    QuotesFormComponent,
    NavBarComponent,
    AuthorsComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    LikeComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
