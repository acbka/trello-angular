import { Component, OnInit, Input, Output } from '@angular/core';

import { Board } from '../board';
import { Boards } from '../boards';
import { Note } from '../note';
import { Notes } from '../Notes';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

   @Input() board

   editable : boolean = true
   boards : Board[] = Boards
   title = ''
   notes : Note[] = Notes
   
  

  constructor() {}

   edit(){
      this.editable = !this.editable
   }

   submit(){
      event.preventDefault()
      if (this.title != '') {
         this.newTitle()
      } else {
         this.editable = !this.editable
      }
   }

   newTitle(){
      this.editable = !this.editable
      let index = this.boards.indexOf(this.board)
      this.boards[index].title = this.title
   }
   
   onKey(event){
      if (event.keyCode == 13) {
         this.newTitle()
      }     
      this.title = event.target.value.slice(0,20)
   }

   createNote(){
      let note = new Note()
     this.notes.push(note) 
      console.log("hbkkjj")
   }

  ngOnInit() {
  }

}
