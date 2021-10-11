import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
import { QuotesFormComponent } from '../quotes-form/quotes-form.component';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent{

  @Input()quote:Quote;

  constructor() { }

  ngOnInit(): void {
  }

}
