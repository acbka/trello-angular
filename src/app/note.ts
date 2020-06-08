export class Note {
   id: number;
   name : string;
   completed : boolean;
   constructor(id : number){
      this.id = id,
      this.name = 'Task',
      this.completed = false;
   }
}
