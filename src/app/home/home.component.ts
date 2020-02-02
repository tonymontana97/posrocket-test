import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { UserService } from '@app/home/user.service';
import { Observable } from 'rxjs';
import { User } from '@app/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isLoading = false;
  public users$: Observable<User[]>;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.users$ = this.userService.getUsers();
  }
}
