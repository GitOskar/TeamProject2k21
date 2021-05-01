import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { AirQualityData } from 'src/app/service/air-quality/air-quality-service.service';

@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.css']
})
export class AirQualityChartComponent implements OnInit, OnChanges {

  @Input() airQualityData: AirQualityData[];
  chart: Chart;
  ctx = "airQualityChart";

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

    let labels = this.airQualityData.map(value => this.capitalizeFirstLetter(value.city_name));
    let datasets = this.prepareDatasets();

    this.chart = new Chart(this.ctx, {
      type: 'bar',
      labels,
      data: {
        labels,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
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
    let C6H6List = [];
    let COList = [];
    let NO2List = [];
    let SO2List = [];
    let O3List = [];
    let PM10List = [];
    let PM25List = [];
    console.log(pollutionTypes);
    pollutionTypes.forEach(value => {
      if (value.C6H6 != undefined) {
        C6H6List.push(value.C6H6)
      }
      else {
        C6H6List.push(0)
      }

      if (value.CO != undefined) {
        COList.push(value.CO)
      }
      else {
        COList.push(0)
      }

      if (value.NO2 != undefined) {
        NO2List.push(value.NO2)
      }
      else {
        NO2List.push(0)
      }

      if (value.SO2 != undefined) {
        SO2List.push(value.SO2)
      }
      else {
        SO2List.push(0)
      }

      if (value.O3 != undefined) {
        O3List.push(value.O3)
      }
      else {
        O3List.push(0)
      }

      if (value.PM10 != undefined) {
        PM10List.push(value.PM10)
      }
      else {
        PM10List.push(0)
      }

      if (value['PM2.5'] != undefined) {
        PM25List.push(value['PM2.5'])
      }
      else {
        PM25List.push(0)
      }
    });

    let datasets = [];

    if (C6H6List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "C6H6",
        data: C6H6List,
        backgroundColor: this.createRandomColor()
      })
    }

    if (COList.find(value => value != 0) != undefined) {
      datasets.push({
        label: "CO",
        data: COList,
        backgroundColor: this.createRandomColor()
      })
    }

    if (NO2List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "NO2",
        data: NO2List,
        backgroundColor: this.createRandomColor()
      })
    }

    if (SO2List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "SO2",
        data: SO2List,
        backgroundColor: this.createRandomColor()
      })
    }

    if (O3List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "O3",
        data: O3List,
        backgroundColor: this.createRandomColor()
      })
    }

    if (PM10List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "PM10",
        data: PM10List,
        backgroundColor: this.createRandomColor()
      })
    }

    if (PM25List.find(value => value != 0) != undefined) {
      datasets.push({
        label: "PM25",
        data: PM25List,
        backgroundColor: this.createRandomColor()
      })
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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
