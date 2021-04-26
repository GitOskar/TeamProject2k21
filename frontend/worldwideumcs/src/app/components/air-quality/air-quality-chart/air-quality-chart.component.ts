import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { AirQualityData } from 'src/app/service/air-quality/air-quality-service.service';

@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.css']
})
export class AirQualityChartComponent implements OnInit, OnChanges {

  @Input() airQualityData: AirQualityData[];
  chart: Chart;

  constructor() { }

  ngOnInit(): void {
    this.chart = null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chart != null) {
      this.chart.destroy();
    }

    if (this.airQualityData == null || this.airQualityData == undefined) {
      this.ngOnInit();
      return;
    }
    let labels = this.airQualityData.map(value => value.city_name);
    let datasets = this.prepareDatasets();

    this.chart = new Chart("airQualityChart", {
      type: 'bar',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Air Quality'
          }
        }
      }
    })
  }

  prepareDatasets() {
    let pollutionTypes = this.airQualityData.map(value => value.pollution_types);
    let datasets = [];

    // C6H6
    let tmp = pollutionTypes.map(value => value.C6H6);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("C6H6", tmp));
    }

    // CO
    tmp = pollutionTypes.map(value => value.CO);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("CO", tmp));
    }

    // NO2
    tmp = pollutionTypes.map(value => value.NO2);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("NO2", tmp));
    }

    // O3
    tmp = pollutionTypes.map(value => value.O3);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("O3", tmp));
    }

    // PM10
    tmp = pollutionTypes.map(value => value.PM10);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("PM10", tmp));
    }

    // PM2.5
    tmp = pollutionTypes.map(value => value.PM25);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("PM2.5", tmp));
    }

    // SO2
    tmp = pollutionTypes.map(value => value.SO2);
    if (tmp != undefined && tmp != null) {
      datasets.push(this.newDataset("SO2", tmp));
    }

    return datasets;
  }

  newDataset(label: string, data) {

    return {
      label: label,
      backgroundColor: this.createRandomColor(),
      data: data
    }
  }

  createRandomColor() {
    return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }
}
