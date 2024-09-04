import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent implements OnInit{
  userForm! :  FormGroup;
  users: any[] = [];
  editIndex: number | null = null;

  constructor(private formbuilder: FormBuilder){}
  

  ngOnInit(): void {
    this.userForm = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      number:['']
    })
  }

  userSubmit(){
    let reqdata = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      email: this.userForm.value.email,
      number: this.userForm.value.number
    }
    console.log(reqdata);
    

    this.users.push(reqdata);
      this.userForm.reset();
      console.log(this.users);
  }
  onEdit(index : number)
  {
    this.editIndex = index;
    this.userForm.setValue(this.users[index]);
    
  }
  editChanges(){
    if (this.editIndex !== null) {
      this.users[this.editIndex] = this.userForm.value;
      this.editIndex = null;
    }
   
    
  }

  onDelete(index: any){
   this.editIndex = index;
   this.users.splice(index, 1);
  }
}
