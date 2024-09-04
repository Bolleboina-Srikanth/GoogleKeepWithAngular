import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem("token");
  }

  CreateNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.PostServiceReset('https://localhost:44392/api/Note/Notemaking', reqData, true, header)
  }

  getAllNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('https://localhost:44392/api/Note/GetAllNotes', true, header);
  }


  getNotes() {
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token


      })
    }
    return this.httpService.getService('https://localhost:44392/api/Note/GetAllNotes', true, header)
  }

  archiveNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44392/api/Note/Archive?NoteId=' + reqData.noteId, {}, true, header)
  }
  unarchiveNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44392/api/Note/UnArchive?NoteId=' + reqData.noteId, {}, true, header)
  }

  DeleteNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44392/api/Note/Trash?NoteId=' + reqData.noteId, {}, true, header)
  }
  UnDeleteNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44392/api/Note/UnTrash?NoteId=' + reqData.noteId, {}, true, header)
  }

  notesColor(reqData: any){
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }


    return this.httpService.putService('https://localhost:44392/api/Note/Colour', reqData, true, header)
  }

  upDateNotes(reqData : any){
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    https://localhost:44392/api/Note/UpdateNote


    return this.httpService.putService('https://localhost:44392/api/Note/UpdateNote', reqData, true, header)

  }
  UploadImage(reqData : any){
    let header = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.token
      })
    }
    // https://localhost:44392/api/Note/UploadNotesImg

    return this.httpService.putService('https://localhost:44392/api/Note/UploadNotesImg', reqData, true, header)

  }


}