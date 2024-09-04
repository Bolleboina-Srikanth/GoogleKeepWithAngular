import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrl: './trash-notes.component.scss'
})
export class TrashNotesComponent implements OnInit {


  notesArray: any;
  @Output() noteUpdated = new EventEmitter<void>();



  constructor(private notesService: NotesService) { }
  ngOnInit(): void {
    this.onsubmit();
  }
  onsubmit() {
    this.notesService.getNotes().subscribe((response: any) => {
      console.log(response.data);
      this.notesArray = response.data
      console.log(this.notesArray);
      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isTrash == true;
      })
      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isArchive == false;
      })

      this.notesArray.reverse();
    })
  }

  untrash(notes: any) {
    this.notesService.UnDeleteNote(notes).subscribe((response: any) => {
      console.log(response);
      // this.noteUpdated.emit();
      this.onsubmit();
    })
  }

}
