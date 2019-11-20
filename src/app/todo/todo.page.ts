import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  notes = [];
  addNote:any={};
  constructor() { }

  ngOnInit() {
  }

  async saveNote(){
    console.log('Save Note', this.addNote)
      const response = await fetch('http://localhost:3000/add-note', {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        referrer: 'no-referrer', 
        body: JSON.stringify(this.addNote)
      });
       await response.json().then(res=>this.notes=res); 
  }

  async deleteNote(note){
    const response = await fetch('http://localhost:3000/remove-note', {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      referrer: 'no-referrer', 
      body: JSON.stringify(note)
    });
     await response.json().then(res=>this.notes=res); 
  }

  


}
