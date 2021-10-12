import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})

export class QuotesFormComponent implements OnInit {

  @Output() qdetails = new EventEmitter<Quote>();

  newQuote = new Quote('','','',new Date());

  addQuote(){
    this.qdetails.emit(this.newQuote);

  }

  constructor() { }

  ngOnInit(): void {
  }
}

