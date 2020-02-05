import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@app/home/user.service';
import { EGender, User } from '@app/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-single',
  templateUrl: './users-single.component.html',
  styleUrls: ['./users-single.component.scss']
})
export class UsersSingleComponent implements OnInit {
  public user: User;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public form: FormGroup;
  public genders = EGender;
  public gendersArray = [
    {
      name: 'Female',
      value: this.genders.FEMALE
    },
    {
      name: 'Male',
      value: this.genders.MALE
    }
  ];
  tagCtrl: any;

  constructor(
    private readonly userService: UserService,
    private readonly formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UsersSingleComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: string }
  ) {}

  ngOnInit() {
    if (this.data && this.data.id) {
      this.userService.getUser(this.data.id).subscribe(user => {
        this.user = user;
        this.form = this.initForm(this.user);
        console.log(user);
        this.form.controls.company.valueChanges.subscribe(value => {
          this.form.controls.isActive.setValue(true);
        });
      });
    } else {
      this.user = new User({});
      this.form = this.initForm(this.user);
    }
  }

  initForm(user: User): FormGroup {
    return this.formBuilder.group({
      name: [user.name, [Validators.required]],
      balance: [user.balanceNumber, [Validators.required, Validators.min(0)]],
      picture: [user.picture],
      age: [user.age, [Validators.required, Validators.min(0)]],
      isActive: [user.company ? true : user.isActive],
      eyeColor: [user.eyeColor],
      company: [user.company],
      address: [user.address],
      email: [user.email],
      phone: [user.phone],
      tag: [''],
      friend: [''],
      about: [user.about],
      greeting: [user.greeting],
      latitude: [user.latitude],
      longitude: [user.longitude],
      favoriteFruit: [user.favoriteFruit],
      gender: [user.gender, [Validators.required]]
    });
  }

  remove(tag: string): void {
    this.user.tags.splice(this.user.tags.indexOf(tag), 1);
  }

  add($event: MatChipInputEvent): void {
    this.user.tags.push($event.value);
    this.form.controls.tag.setValue('');
  }

  removeFriend(i: number) {
    this.user.friends.splice(i, 1);
  }

  addFriend($event: MatChipInputEvent) {
    if (this.user.friends.length >= 3) {
      this.snackBar.open('Sorry, you can have only 3 friends.', '', {
        duration: 2000
      });
      return;
    }
    this.user.friends.push({
      name: $event.value,
      id: ''
    });
    this.form.controls.friend.setValue('');
  }

  close(): void {
    this.dialogRef.close();
    this.snackBar.open('Changes was saved', '', {
      duration: 2000
    });
  }
}
