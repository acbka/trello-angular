import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NoteComponent } from './note/note.component';
import { BoardRowComponent } from './board-row/board-row.component';
import { EditDirective } from './edit.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NoteComponent,
    BoardRowComponent,
    EditDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
