import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './Components/review/review.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import {MatCardModule} from '@angular/material/card';
import { NoteContainerComponent } from './Components/note-container/note-container.component';
import { AppIconComponent } from './Components/app-icon/app-icon.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdateNotesComponent } from './Components/update-notes/update-notes.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UserTaskComponent } from './Components/user-task/user-task.component'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FilterPipe } from './Pipes/Filter/filter.pipe';













@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ReviewComponent,
    ResetPasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    DisplayNotesComponent,
    NoteContainerComponent,
    AppIconComponent,
    ArchiveNotesComponent,
    TrashNotesComponent,
    UpdateNotesComponent,
    UserTaskComponent,
    FilterPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
