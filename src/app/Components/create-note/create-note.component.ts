import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../User/User/user.service';
import { NotesService } from '../../Services/Notes/notes.service';
import { title } from 'process';
import { response } from 'express';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.scss'
})
export class CreateNoteComponent implements OnInit {
  createForm!: FormGroup;
  @Output() refreshNote = new EventEmitter<string>();

  constructor(private noteService: NotesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['',],
      description: ['']
    })

  }
  SubmitNote() {
    this.collapseNote();

    let reqdata = {
      Title: this.createForm.value.title,
      TakeNote: this.createForm.value.description
    }
    console.log("klngklfger", reqdata);
    if (reqdata.Title != '' && reqdata.TakeNote != '') {
      this.noteService.CreateNote(reqdata).subscribe((response: any) => {
        console.log(response);
        this.refreshNote.emit(response);
      })
    }

    this.createForm.reset();
    console.log("Form Values:", this.createForm.value);
    console.log("Request Data:", reqdata);
  }

  // ------------------------------------------------------------
  isExpanded: boolean = false;
  noteTitle: string = '';
  noteContent: string = '';

  expandNote() {
    this.isExpanded = true;
  }

  collapseNote() {
    this.isExpanded = false;
    this.saveNote();
  }

  saveNote() {
    if (this.noteTitle || this.noteContent) {
      console.log('Saving note:', this.noteTitle, this.noteContent);
      // Implement saving logic here
    }
    this.noteTitle = '';
    this.noteContent = '';
  }


  adjustTextareaHeight(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset the height to auto to calculate new height correctly
    textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
  }
  // ---------------------------------------------------------------------------------------------------------------


}
