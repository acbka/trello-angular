import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NoteComponent } from './note/note.component';
import { BoardRowComponent } from './board-row/board-row.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NoteComponent,
    BoardRowComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
