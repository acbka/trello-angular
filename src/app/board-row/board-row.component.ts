import { Component, OnInit } from '@angular/core';
import { Boards } from '../boards';
import { Board } from '../board';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.scss']
})


export class BoardRowComponent implements OnInit {
   
   boards: Board[] = Boards
   

   constructor() { }

   addBoard(){
      let board = new Board()
      this.boards.push(board)
   }

   ngOnInit() {
   }

}
