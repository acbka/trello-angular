import { Board } from './board';

//localStorage.clear();

export const Boards: Board[] = JSON.parse(localStorage.getItem("trello")) ||[
   {id: 0,
   title: 'First',
   notes : [],
   },
]
