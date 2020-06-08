import { Component, OnInit, Input } from '@angular/core';
import { Board } from '../board';
import { Boards } from '../boards';

@Component({
   selector: 'app-note',
   templateUrl: './note.component.html',
   styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   @Input() note
   @Input() notes

   boards: Board[] = Boards;

   editable: boolean = true;
   showed: boolean = false;
   name: string = "";


   constructor() { }

   editByClick(){
      this.editable = !this.editable;
   }
   more() {
      this.showed = !this.showed;
   }

   removeOverlay() {
      this.showed = false;
   }

   removeOutside() {
      if(this.editable) {this.submit()};
   }

   edit() {
      this.showed = !this.showed;
      this.editable = !this.editable;
   }

   submit() {
      event.preventDefault()
      if (this.name != "") {
         this.newName();
         this.save();
      } else {
         this.editable = !this.editable;
      }
   }

   newName() {
      this.editable = !this.editable;
      let index = this.notes.indexOf(this.note);
      this.notes[index].name = this.name;
      this.save();
   }

   onKey(event) {
      if (event.keyCode == 13) {
         this.newName();
      }
      this.name = event.target.value.slice(0, 50);
      this.save();
   }

   done() { 
      this.showed = !this.showed;
      this.note.completed = !this.note.completed;
      this.save();
   }

   delete() {
      let index = this.notes.indexOf(this.note);
      this.notes.splice(index, 1); 
      this.save();
   }

   save(){
      const json = JSON.stringify(Boards)
      localStorage.setItem("trello", json);
   }

   ngOnInit() {
  
   }

}
