import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UserService } from '@app/home/user.service';
import { HomeBalancesChartComponent } from './home-balances-chart/home-balances-chart.component';
import { HomeGenderChartComponent } from './home-gender-chart/home-gender-chart.component';
import { LineChartModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
    LineChartModule,
    FormsModule
  ],
  providers: [UserService],
  declarations: [HomeComponent, HomeBalancesChartComponent, HomeGenderChartComponent]
})
export class HomeModule {}
