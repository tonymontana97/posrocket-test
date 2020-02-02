import { Component, Input, OnInit } from '@angular/core';
import { User } from '@app/types';

@Component({
  selector: 'app-home-balances-chart',
  templateUrl: './home-balances-chart.component.html',
  styleUrls: ['./home-balances-chart.component.scss']
})
export class HomeBalancesChartComponent implements OnInit {
  @Input()
  public users: User[] = [];
  @Input()
  public limit = 10;

  public onlyActive = false;
  public view: any[] = [700, 300];
  public legend = true;
  public showLabels = true;
  public animations = true;
  public xAxis = true;
  public yAxis = true;
  public showYAxisLabel = true;
  public showXAxisLabel = true;
  public xAxisLabel = 'Year';
  public yAxisLabel = 'Population';
  public timeline = true;
  public colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {}

  ngOnInit() {}
}
