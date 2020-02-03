import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IFriend, User } from '@app/types';
import { UserService } from '@app/home/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { format } from 'date-fns';
class Users {}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatSort, { static: true })
  public sort: MatSort;
  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  public displayedColumns: string[] = ['index', 'picture', 'name', 'phone', 'registered', 'age', 'isActive'];
  public dataSource: MatTableDataSource<User> = null;
  public users: User[] = [];

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.setUsers(users);
    });
  }

  public setUsers(users: User[]): void {
    this.dataSource = new MatTableDataSource<User>(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter): boolean => {
      const spitedFilter = filter.split('|');

      if (spitedFilter[0] === 'tags') {
        return (
          data.tags.findIndex(
            t =>
              t
                .trim()
                .toLowerCase()
                .indexOf(spitedFilter[1].toLowerCase().trim()) >= 0
          ) >= 0
        );
      }

      if (spitedFilter[0] === 'friends') {
        const finded = data.friends.filter(
          f =>
            f.name
              .trim()
              .toLowerCase()
              .indexOf(spitedFilter[1].toLowerCase().trim()) >= 0
        );
        return finded.length > 0;
      }

      if (spitedFilter[0] !== 'tags' && spitedFilter[0] !== 'friends') {
        if (
          data[spitedFilter[0]]
            .toString()
            .toLowerCase()
            .trim()
            .indexOf(spitedFilter[1].toLowerCase().trim()) >= 0
        ) {
          return true;
        }
      }

      return false;
    };
  }

  public getFiriendsString(friends: IFriend[]): string[] {
    return friends.map(f => f.name);
  }

  public formatDate(date: string): string {
    return format(date, 'YYYY-MM-DD hh:mm');
  }

  public getYearByAge(age: number): number {
    return new Date().getFullYear() - age;
  }

  public filter(value: string, name: string): void {
    console.log(value);
    this.dataSource.filter = `${name}|${value}`;
  }
}
