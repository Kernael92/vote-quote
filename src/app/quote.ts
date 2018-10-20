export class Quote {
   public showAuthorName:boolean;
   constructor(public id: number, public name: string, public aurthorName:string){
      this.showAuthorName = false;
   }
}
