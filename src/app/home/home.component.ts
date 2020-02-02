import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { UserService } from '@app/home/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.userService.getUsers().subscribe(res => {
      console.log(res);
    });
  }
}
