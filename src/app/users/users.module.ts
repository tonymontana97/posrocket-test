import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from '@app/users/users-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';
import { UserService } from '@app/home/user.service';
import { UsersSingleComponent } from './users-single/users-single.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UsersSingleComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule, MaterialModule, ReactiveFormsModule],
  providers: [UserService, FormBuilder],
  entryComponents: [UsersSingleComponent]
})
export class UsersModule {}
