import { Component, OnInit } from '@angular/core';
import { Boards } from '../boards';
import { Board } from '../board';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.scss']
})


export class BoardRowComponent implements OnInit {
   
   boards: Board[] = Boards
   index: number
   

   constructor() { }

   addBoard(){
      let id : number = this.boards.length
      let board = new Board(id)
      this.boards.push(board)
   }

   drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
    }

   ngOnInit() {
   }

}
