import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGenderChartComponent } from './home-gender-chart.component';

describe('HomeGenderChartComponent', () => {
  let component: HomeGenderChartComponent;
  let fixture: ComponentFixture<HomeGenderChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGenderChartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
