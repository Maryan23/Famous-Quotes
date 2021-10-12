import { Component, OnInit, Input} from '@angular/core';
import {Quote} from '../quote';
import { QuotesFormComponent } from '../quotes-form/quotes-form.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote('Life is what happens when you are busy making other plans','John Lennon','Vodca'),
  ]
  toggleAuthor(index:any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  addQuote(qdet:Quote){
    this.quotes.push(qdet)
  }
  deleteQuote(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].body}?`)

      if (toDelete){
        this.quotes.splice(index,0)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
