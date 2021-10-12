export class Quote {

   showAuthor:boolean
   constructor(public body:string,public author:string,public submitted:string,public date:Date){
       this.showAuthor=false;
   }
    }
