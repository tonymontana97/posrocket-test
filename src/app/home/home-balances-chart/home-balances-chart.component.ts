import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '@app/types';

@Component({
  selector: 'app-home-balances-chart',
  templateUrl: './home-balances-chart.component.html',
  styleUrls: ['./home-balances-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBalancesChartComponent implements OnChanges {
  @Input()
  public users: User[] = [];
  @Input()
  public limit = 10;

  public onlyActive = false;
  public view: any[] = [0, 340];
  public legend = false;
  public showLabels = true;
  public animations = true;
  public xAxis = true;
  public yAxis = true;
  public showYAxisLabel = true;
  public showXAxisLabel = true;
  public xAxisLabel = '';
  public yAxisLabel = 'Amount';
  public timeline = true;
  public colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.users && changes.users.currentValue) {
      this.sortUsersByBalances();
    }
  }

  public get chartData(): any {
    const topUsers = this.users.slice(0, this.limit);
    return [
      {
        name: 'Total',
        series: topUsers
          .filter(u => {
            if (this.onlyActive) {
              return u.isActive === this.onlyActive;
            } else {
              return true;
            }
          })
          .map(u => {
            return {
              value: u.balanceNumber,
              name: u.email
            };
          })
      }
    ];
  }

  private sortUsersByBalances(): void {
    this.users = this.users.sort((user: User, nextUser: User) =>
      user.balanceNumber < nextUser.balanceNumber ? 1 : -1
    );
  }
}
