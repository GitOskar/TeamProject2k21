import { Component, OnInit } from '@angular/core';
import { StatisticalTeacherDataService, TeacherStatisticData } from 'src/app/service/statistical-teacher-data/statistical-teacher-data.service';

@Component({
  selector: 'statistical-teacher-data',
  templateUrl: './statistical-teacher-data.component.html',
  styleUrls: ['./statistical-teacher-data.component.css']
})
export class StatisticalTeacherDataComponent implements OnInit {

  statistic: string;
  itInstituteStatistics: TeacherStatisticData;
  noItInstituteStatistics: TeacherStatisticData;
  restStatistics: TeacherStatisticData;
  isChecked: boolean;
  statisticsToDisplay: TeacherStatisticData;

  constructor(private service: StatisticalTeacherDataService) { }

  ngOnInit(): void {
    this.isChecked = false;
    this.getItInstituteStatistics();
    this.getNoItInstituteStatistics();
    this.statisticsToDisplay = null;
  }

  setStatistic(statistic: string): void {
    this.statistic = statistic;
  }

  getItInstituteStatistics(): void {
    this.service.getTeacherStatistics("it").subscribe(
      value => this.itInstituteStatistics = value
    );
  }

  getNoItInstituteStatistics(): void {
    this.service.getTeacherStatistics("rest").subscribe(value => {
      this.noItInstituteStatistics = value;
      this.statisticsToDisplay = value;
    });
  }

  instituteChange(): void {
    if (this.isChecked) {
      this.statisticsToDisplay = this.itInstituteStatistics;
    }
    else {
      this.statisticsToDisplay = this.noItInstituteStatistics;
    }
  }
}