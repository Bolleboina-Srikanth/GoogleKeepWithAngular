import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.scss'
})
export class UserTaskComponent implements OnInit{
  userForm!: FormGroup;

  userdata: any[] = [];
  arrayindex: number | null= null;

  constructor(private formbuilder: FormBuilder, private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
    title: [''],
    task: ['']
    })
  }

  userSubmit(){
    let reqdata ={
      title: this.userForm.value.title,
      task: this.userForm.value.task
    }
    console.log(reqdata);
    
    this.userdata.push(reqdata);
    console.log(this.userdata);
    
  }
  onEdit(id: any){

  }
  onDelete(id : any){
    console.log(id);
    this.arrayindex = id;
    console.log(this.arrayindex);
    
    
    this.userdata.splice(id,1);
  }

  update(completed: boolean, index?: number) {
    // this._snackBar.open('Message archived');
    this._snackBar.open('your task has  completed', 'Undo', {
      duration: 3000
    });
    }

   

    

}
