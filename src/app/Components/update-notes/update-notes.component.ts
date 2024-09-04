import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrl: './update-notes.component.scss'
})
export class UpdateNotesComponent implements OnInit {

  title: any;
  desc: any;
  color: any;
  noteId: any;

  @Output() refreshNote = new EventEmitter<string>();

  ngOnInit(): void {
  }

  constructor(private noteService: NotesService, public dialogRef: MatDialogRef<UpdateNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title,
      this.desc = data.takeNote,
      this.color = data.color,
      this.noteId = data.noteId
  }

  closeDialog() {
    let reqData = {
      title: this.title,
      TakeNote: this.desc,
      // color: this.color,
      noteId: this.noteId
    }
    this.noteService.upDateNotes(reqData).subscribe((response: any) => {
      console.log(response); 
      debugger;
      this.refreshNote.emit(response);
    })
    this.dialogRef.close();
  }


  
  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    const maxHeight = 300;
    if (textarea.scrollHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`;
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.overflowY = 'hidden';
    }
  }

}
