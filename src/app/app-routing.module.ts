import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ReviewComponent } from './Components/review/review.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { NoteContainerComponent } from './Components/note-container/note-container.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import { UserTaskComponent } from './Components/user-task/user-task.component';
import { authFundoo } from './Shared/auth-fundoo.guard';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'userTask', component: UserTaskComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'ResetPassword/:token', component: ResetPasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [authFundoo],
    children: [
      { path: '', redirectTo: "/dashboard/notes", pathMatch: 'full' },
      { path: 'notes', component: NoteContainerComponent },
      { path: 'archive', component: ArchiveNotesComponent },
      { path: 'trash', component: TrashNotesComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
