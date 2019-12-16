import { Injectable } from '@angular/core';
import { Note } from './note';
import { Notes } from './Notes';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {

   notes: Note[] = Notes

  constructor() { }

   addNote(){
      let note = new Note()
      this.notes.push(note)  
      console.log("service")
   }

}
