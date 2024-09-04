import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-app-icon',
  templateUrl: './app-icon.component.html',
  styleUrl: './app-icon.component.scss'
})
export class AppIconComponent implements OnInit {
  @Input() noteObject: any
  @Output() noteUpdated = new EventEmitter<void>();

  constructor(private noteService: NotesService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }
  onArchive() {
    console.log(this.noteObject);
    if (this.noteObject.isArchive == false) {
      this._snackBar.open('Note archived', 'Undo', {
        duration: 3000
      });

      let reqData = {
        noteId: this.noteObject.noteId
      }
      this.noteService.archiveNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.noteUpdated.emit();
      })
    }
    else {
      this._snackBar.open('Note unarchived', 'Undo', {
        duration: 3000
      });

      let reqData = {
        noteId: this.noteObject.noteId
      }
      this.noteService.unarchiveNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.noteUpdated.emit();
      })

    }
  }

  deleteNote() {
    if (this.noteObject.isTrash == false) {
      this._snackBar.open('Note binned', 'Undo', {
        duration: 3000
      });
      let reqData = {
        noteId: this.noteObject.noteId
      }

      console.log(reqData);
      this.noteService.DeleteNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.noteUpdated.emit();
      })
    }
    else {
      this._snackBar.open('Note unbinned', 'Undo', {
        duration: 3000
      });
      let reqData = {
        noteId: this.noteObject.noteId
      }

      console.log(reqData);
      this.noteService.UnDeleteNote(reqData).subscribe((response: any) => {
        console.log(response);
        this.noteUpdated.emit();
      })
    }
  }

  colorArray: Array<any> = [

    { code: '#ffffff', name: 'white' },

    { code: '#FF6347', name: 'Tomato' },

    { code: '#FF4500', name: 'OrangeRed' },

    { code: '#FFFF00', name: 'yellow' },

    { code: '#ADFF2F', name: 'greenyellow' },

    { code: '#BOC4DE', name: 'LightSteelBlue' },

    { code: '#EEE8AA', name: 'PaleGoldenRod' },

    { code: '#7FFFD4', name: 'Aquamarine' },

    { code: '#FFE4C4', name: 'Bisque' },

    { code: '#COCOCO', name: 'Silver' },

    { code: '#BC8F8F', name: 'RosyBrown' },

    { code: '#D3D3D3', name: 'grey' },

  ];

  selectColor(colors: any) {
    let reqData = {
      noteId: this.noteObject.noteId,
      colour: colors.name
    }
    console.log(reqData);

    this.noteService.notesColor(reqData).subscribe((response: any) => {
      console.log(response);
      this.noteUpdated.emit();
    })

  }

  addedColor(event: any) {

  }

  onImageSelected(event: any) {
    console.log(event);
    const selectedFile = event.target.files[0];
    // let reqData = {
    //   noteId: this.noteObject.noteId,
    //   image: event.target.files[0]
    // }
    const reqData = {
      noteId: this.noteObject.noteId
    };
    const formData = new FormData();

    formData.append('noteId', reqData.noteId);

    formData.append('image', selectedFile, selectedFile.name);

    this.noteService.UploadImage(formData).subscribe((response: any) => {
      console.log(response);
      this.noteUpdated.emit();
    })
  }
}
