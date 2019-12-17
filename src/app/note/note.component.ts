import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
   @Input() note
   @Input() notes

   editable : boolean = true;
   showed : boolean = false;
   name : string = "";
   
   completed : boolean = false; 

  constructor() { }

   more(){
      this.showed = !this.showed
   }

   removeOverlay(){
      this.showed = false
   }
   
   edit(){
      this.showed = !this.showed
      this.editable = !this.editable
   }

   submit(){
      event.preventDefault()
      if (this.name != "") {
         this.newName() 
      } else {
         this.editable = !this.editable
      }
   }

   newName(){
      this.editable = !this.editable
      let index = this.notes.indexOf(this.note)
      this.notes[index].name = this.name
   }
   
   onKey(event){
      if (event.keyCode == 13) {
         this.newName()
      }     
      this.name = event.target.value.slice(0,20)
   }

   done(){
      this.showed = !this.showed
      this.note.completed = !this.note.completed
      this.completed = this.note.completed
   }

  ngOnInit() {

  }

}
