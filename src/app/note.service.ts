import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  public notes = [];
  constructor() { 
    this.notes.push({title:'defualt note', description:'this is a defualt note for test'});
  }

  public addNote(note){
    this.notes.push(note);
    console.log('added new note',this.notes);
  }

  public removeNote(note){
    var index = this.notes.indexOf(note); // get index if value found otherwise -1

    if (index > -1) { //if found
      this.notes.splice(index, 1);
    }
  }
}
