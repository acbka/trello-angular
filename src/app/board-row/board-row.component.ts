import { Component, OnInit, EventEmitter } from '@angular/core';
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
   indexStart: number = 0
   indexEnd: number = 0
   dragBoard = null
   dropBoard = null
   allBoardsNode = null
   allBoardsArray = []


   constructor() { }

   addBoard(){
      let id : number = this.boards.length
      let board = new Board(id)
      this.boards.push(board)
      this.draggedArray()

   }

   drop(event: CdkDragDrop<string[]>) {
       moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
   }



   draggedArray(){
      //this.indexStart = this.boards.indexOf(item)
      this.allBoardsNode = document.getElementsByClassName("column")
      this.allBoardsArray = Array.from(this.allBoardsNode)
      //this.allBoardsArray = [...this.allBoardsNode]
      
      this.allBoardsArray.forEach(board => {
         board.addEventListener("dragstart", this.onDragStart)
         board.addEventListener('dragenter', this.onDragEnter)
         board.addEventListener('dragover', this.onDragOver)
         board.addEventListener('dragleave', this.onDragLeave)
         board.addEventListener('dragend', this.onDragEnd)
         board.addEventListener('drop', this.onDrop)
      })
   }

   onDragStart(board){
      this.dragBoard = board
      this.indexStart = this.boards.indexOf(this.dragBoard )
      
      console.log("start ", this.indexStart, this.dragBoard)
   }
   onDragEnter(board){
      console.log("enter ",board)
   }
   onDragLeave(){
      //console.log("leave ",this.dragBoard)
   }
   onDragOver(){
      //console.log("over ",this.dragBoard)
   }
   onDragEnd(){
      //console.log("end ",this.dragBoard)
   }
   onDrop(){
      //console.log("drop ",this.dragBoard)
   }

   ngOnInit() {
      this.draggedArray()
   }

}
