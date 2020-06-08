import { Injectable } from '@angular/core';
import { Note } from './note';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

   notes: Note[] = Notes

  constructor() { }
/*
   addNote(){
      let id : number = this.notes.length
      let note = new Note(id)
      this.notes.push(note)  
      console.log("service")
   }
*/
}
