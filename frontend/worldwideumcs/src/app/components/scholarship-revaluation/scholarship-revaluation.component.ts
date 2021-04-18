import { Component, OnInit } from '@angular/core';
import { ScholarshipRevaluationServiceService } from 'src/app/service/scholarship-revaluation/scholarship-revaluation-service.service';

@Component({
  selector: 'app-scholarship-revaluation',
  templateUrl: './scholarship-revaluation.component.html',
  styleUrls: ['./scholarship-revaluation.component.css']
})
export class ScholarshipRevaluationComponent implements OnInit {

  amount: number;
  currency: string;
  selectedScholarshipType: string;
  selectedLevel: string;
  selectedCurrency: string;

  constructor(private service: ScholarshipRevaluationServiceService) { }

  ngOnInit(): void {
    this.amount = null;
    this.currency = null;
    this.selectedScholarshipType = null;
    this.selectedLevel = null;
    this.selectedCurrency = null;
  }

  getAmount(): void {
    
    if (this.selectedCurrency == null && this.selectedLevel == null && this.selectedScholarshipType == null) {
      return;
    }

    this.currency = this.selectedCurrency;

    this.service.getScholarshipData(this.selectedScholarshipType, this.selectedLevel, this.selectedCurrency).subscribe(value => {
      this.amount = Number.parseFloat(value.toFixed(4));
      this.setPepePicture();
    });

  }

  setPepePicture(): void {
    if (this.amount < 10) {
      console.log(this.amount);
      this.setImage('pepe', 'assets/images/pepe-hangman.jpg');
    }
    else if (this.amount < 200) {
      this.setImage('pepe', 'assets/images/pepe-cryings.jpg');
    }
    else if (this.amount < 700) {
      this.setImage('pepe', 'assets/images/pepe-sad.jpg');
    }
    else {
      this.setImage('pepe', 'assets/images/pepe-happy.jpg');
    }

  }

  setImage(id: string, path: string) {
    (document.getElementById(id) as HTMLImageElement).src = path;
  }

  scholarships = [
    { value: 'REKTORSKIE', viewValue: 'Rektorskie' },
    { value: 'SOCJALNE', viewValue: 'Socjalne' },
    { value: 'NIEPELNOSPRAWNYCH', viewValue: 'Niepełnosprawnych' }
  ];

  levels = [
    { value: 'FIRST', viewValue: 'Pierwszy' },
    { value: 'SECOND', viewValue: 'Drugi' },
    { value: 'THIRD', viewValue: 'Trzeci' },
    { value: 'FOURTH', viewValue: 'Czwarty' }
  ];

  currencies = [
    { value: 'CAD', viewValue: 'CAD' },
    { value: 'HDK', viewValue: 'HDK' },
    { value: 'ISK', viewValue: 'ISK' },
    { value: 'PHP', viewValue: 'PHP' },
    { value: 'DKK', viewValue: 'DKK' },
    { value: 'HUF', viewValue: 'HUF' },
    { value: 'CZK', viewValue: 'CZK' },
    { value: 'GBP', viewValue: 'GBP' },
    { value: 'RON', viewValue: 'RON' },
    { value: 'SEK', viewValue: 'SEK' },
    { value: 'IDR', viewValue: 'IDR' },
    { value: 'INR', viewValue: 'INR' },
    { value: 'BRL', viewValue: 'BRL' },
    { value: 'RUB', viewValue: 'RUB' },
    { value: 'HRK', viewValue: 'HRK' },
    { value: 'JPY', viewValue: 'JPY' },
    { value: 'THB', viewValue: 'THB' },
    { value: 'CHF', viewValue: 'Frank Szwajcarski' },
    { value: 'EUR', viewValue: 'Euro' },
    { value: 'MYR', viewValue: 'MYR' },
    { value: 'BGN', viewValue: 'BGN' },
    { value: 'TRY', viewValue: 'TRY' },
    { value: 'CNY', viewValue: 'CNY' },
    { value: 'NOK', viewValue: 'NOK' },
    { value: 'NZD', viewValue: 'NZD' },
    { value: 'ZAR', viewValue: 'ZAR' },
    { value: 'SGD', viewValue: 'SGD' },
    { value: 'AUD', viewValue: 'AUD' },
    { value: 'ILS', viewValue: 'ILS' },
    { value: 'KRW', viewValue: 'KRW' },
    { value: 'MXN', viewValue: 'MXN' },
    { value: 'USD', viewValue: 'Dolar amerykański' },
    { value: 'BTC', viewValue: 'BitCoin' },
    { value: 'GOLD', viewValue: 'Złoto' }
  ];
}
