import { Component, OnInit, Input, Output } from '@angular/core';

import { Board } from '../board';
import { Boards } from '../boards';
import { Note } from '../note';
import { Notes } from '../notes';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

   @Input() board

   editable : boolean = true
   visible : boolean = false
   boards : Board[] = Boards
   title = ''
   notes: Note[] = Notes;
   
  

  constructor() {}

   edit(){
      this.editable = !this.editable;
      this.save()
   }

   submit(){
      event.preventDefault()
      if (this.title != '') {
         this.newTitle();
      } else {
         this.editable = !this.editable;
      }
      this.save();
   }

   newTitle(){
      this.editable = !this.editable;
      let index = this.boards.indexOf(this.board);
      this.boards[index].title = this.title;
      this.save();
   }
   
   onKey(event){
      if (event.keyCode == 13) {
         this.newTitle();
      }     
      this.title = event.target.value.slice(0,20);
      this.save();
   }

   createNote(){
      let id : number = this.board.notes.length;
      let note = new Note(id);
      this.board.notes.push(note); 
      this.save();
   }

   prepareToDelete(){
      let numberOfNotes = this.board.notes.length;
     
      if (numberOfNotes > 0) {
         this.visible = true;
      } else this.delete();
   }

   delete(){
      let index = this.boards.indexOf(this.board);
      this.boards.splice(index, 1);
      this.save();
   }

   onChosen(result){
      this.visible = false; 
      if(result){
         this.delete();
      }
   }

   save(){
      const json = JSON.stringify(Boards);
      localStorage.setItem("trello", json);
   }
/*
   delete(){
      let numberOfNotes = this.board.notes.length;
      let result = false;
      if (numberOfNotes > 0) {
         result = confirm("Are you sure?");
      }
      if(numberOfNotes == 0 || result){
         let index = this.boards.indexOf(this.board);
         this.boards.splice(index, 1);
      } 
   }
*/
   onTaskDrop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
      this.save();
    }

  ngOnInit() {
  }

}
