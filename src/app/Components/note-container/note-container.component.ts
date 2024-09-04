import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-note-container',
  templateUrl: './note-container.component.html',
  styleUrl: './note-container.component.scss'
})
export class NoteContainerComponent implements OnInit {
  notesArray: any;
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit() {
    this.notesService.getNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesArray = response.data
      console.log(this.notesArray);
      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isTrash == false;
      })

      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isArchive == false;
      })

      this.notesArray.reverse();
    })

  }

  addNoteEvent($event: any) {
    console.log("emitting newly added notes", $event);
    this.onSubmit();

  }
  
  onNoteUpdated() {
    this.onSubmit();
  }

}
