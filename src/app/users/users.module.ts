import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from '@app/users/users-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '@app/material.module';
import { UserService } from '@app/home/user.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, UsersRoutingModule, MatTableModule, MaterialModule],
  providers: [UserService]
})
export class UsersModule {}
