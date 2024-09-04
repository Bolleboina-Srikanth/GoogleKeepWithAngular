import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrl: './archive-notes.component.scss'
})
export class ArchiveNotesComponent implements OnInit {

  notesArray: any;
  @Output() noteUpdated = new EventEmitter<void>();
  
  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.onsubmit();
  }

  onsubmit() {
    this.notesService.getNotes().subscribe((response: any) => {
      this.noteUpdated.emit();
      this.notesArray = response.data
      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isArchive == true;
      })
      this.notesArray = this.notesArray.filter((Object: any) => {
        return Object.isTrash == false;
      })
      this.notesArray.reverse();
    })

  }



  onNoteUpdated() {
    this.onsubmit(); 
  }
  
}
