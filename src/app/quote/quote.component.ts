import { Component, OnInit, } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


   quotes = [
      new Quote(1,"I actually think that the most efficacious way of making a difference is to lead by example, and doing random acts of kindness is setting a very good example of how to behave in the world.", "Misha Collins", new Date(2017,0,23), "Jane Kris "),
      new Quote(2,"A return to first principles in a republic is sometimes caused by the simple virtues of one man. His good example has such an influence that the good men strive to imitate him, and the wicked are ashamed to lead a life so contrary to his example.", "Niccolo Machiavelli", new Date(2017,8,19), "Naomi Anderson"),
      new Quote(3,"Me being the best in the world, it doesn't mean that much to me if I'm not a good person at the end of the day, if I'm not setting a good example for other people to be better to each other.",  "Rose Namajunas", new Date(2018,6,16), "Paul Singh"),
      new Quote(4,"Olympism seeks to create a way of life based on the joy found in effort, the educational value of a good example and respect for universal fundamental ethical principle.", "Pierre de Coubertin", new Date(2018,9,28), "Glenn Momed"),

  ]

  toggleDetails(index){
     this.quotes[index].showAuthorName = !this.quotes[index].showAuthorName;
     this.quotes[index].showSubmitName = !this.quotes[index].showSubmitName;

 }
   deleteQuote(isRead, index){
      if (isRead){
         let toDelete = confirm('Are you you want to delete this quote?')

         if(toDelete){
            this.quotes.splice(index,1)
         }


      }
   }

   addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.creationDate = new Date(quote.creationDate)
      this.quotes.push(quote)
   }

   







  constructor() { }

  ngOnInit() {
  }

}
