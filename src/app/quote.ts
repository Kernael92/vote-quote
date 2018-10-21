export class Quote {
   public showAuthorName:boolean; public showSubmitName:boolean;
   constructor(public id: number, public name: string, public aurthorName:string, public creationDate: Date, public submitName: string, public upVote: number, public downVote: number){
      this.showAuthorName = false;
      this.showSubmitName = false;
   }
}
