import { Component } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { Router } from '@angular/router';
import { DataService } from '../../Services/Data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private noteService: NotesService, private router: Router, private data: DataService) {
  }


  logout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('login');
  }

  search(event: any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }


}


