import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

   
   @Output() onChosen = new EventEmitter<boolean>();

  constructor() { }

  
  choose(result:any) {
      this.onChosen.emit(result);
  }


  ngOnInit() {
  }

}
