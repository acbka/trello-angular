import { Note } from './note';

export class Board {
   id : number;
   title : string;
   notes? : Note[];
   constructor(id : number){
      this.id = id,
      this.title = 'Board',
      this.notes = []
   }
}
