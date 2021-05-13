import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { TeacherStatisticData } from 'src/app/service/statistical-teacher-data/statistical-teacher-data.service';

@Component({
  selector: 'app-degree-percentage-chart',
  templateUrl: './degree-percentage-chart.component.html',
  styleUrls: ['./degree-percentage-chart.component.css']
})
export class DegreePercentageChartComponent implements OnInit, OnChanges {

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
    let chartData = this.statisticsToDisplay.degrees_percentage;
    let labels = ['Master', 'Doctor', 'Doctor Habituated', 'Professor'];
    let data = [chartData.mgr_percentage, chartData.dr_percentage, chartData.drhab_percentage, chartData.prof_percentage];

    this.chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(15, 252, 3)'
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
            text: 'Degree Percentage Statistics'
          }}}})}
}