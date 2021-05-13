import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { TeacherStatisticData } from 'src/app/service/statistical-teacher-data/statistical-teacher-data.service';

@Component({
  selector: 'app-gender-percentage-chart',
  templateUrl: './gender-percentage-chart.component.html',
  styleUrls: ['./gender-percentage-chart.component.css']
})
export class GenderPercentageChartComponent implements OnInit, OnChanges {

  @Input() statisticsToDisplay: TeacherStatisticData;
  chart: Chart;
  ctx = "chart";

  constructor() { }

  ngOnInit(): void {
    this.prepareChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareChart();
  }

  prepareChart(): void {

    if (this.chart != null || this.chart != undefined) {
      this.chart.destroy();
    }
    let labels = ['Male', 'Female'];
    let data = [this.statisticsToDisplay.male_percentage, this.statisticsToDisplay.female_percentage];

    this.chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgb(54, 162, 235)',
            'rgb(255, 99, 132)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Gender Percentage Statistics'
          }}}})}
}