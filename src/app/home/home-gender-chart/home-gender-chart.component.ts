import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EGender, User } from '@app/types';

@Component({
  selector: 'app-home-gender-chart',
  templateUrl: './home-gender-chart.component.html',
  styleUrls: ['./home-gender-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGenderChartComponent {
  @Input()
  public users: User[] = [];

  view: any[] = [700, 400];
  gadient = true;

  colorScheme = {
    domain: ['#5AA454', '#0042a1', '#C7B42C', '#AAAAAA']
  };

  constructor() {}

  public get chartData(): any {
    return [
      {
        name: 'Female',
        value: this.users.filter(u => u.gender === EGender.FEMALE).length
      },
      {
        name: 'Male',
        value: this.users.filter(u => u.gender === EGender.MALE).length
      }
    ];
  }
}
