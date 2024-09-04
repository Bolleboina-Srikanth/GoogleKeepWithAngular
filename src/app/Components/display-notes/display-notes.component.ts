import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { DataService } from '../../Services/Data/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit {

  filterNote: any;
  @Input() notesList: any;
  @Output() noteUpdated = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private data: DataService) { }
  ngOnInit(): void {
    this.data.incomingData.subscribe((response) => {
      console.log("searchis is in process", response);
      this.filterNote = response;

    })
  }

  editNote(notes: any) {
    let dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '535px',
      data: notes
    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      console.log(result);
      this.noteUpdated.emit();

    });
  }



}
