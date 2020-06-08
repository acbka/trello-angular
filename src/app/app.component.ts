import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Board } from './board';
import { Boards } from './boards';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trello';

  boards: Board[] = Boards


 

  drop(event: CdkDragDrop<string[]>) {
   moveItemInArray(this.boards, event.previousIndex, event.currentIndex);
 }
}
