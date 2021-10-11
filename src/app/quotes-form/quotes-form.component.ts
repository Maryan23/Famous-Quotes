import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  body:string;
  author:string;
  submitted:string;

  submitQuote(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
