import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-umcs-event-time',
  templateUrl: './umcs-event-time.component.html',
  styleUrls: ['./umcs-event-time.component.css']
})
export class UmcsEventTimeComponent implements OnInit {

  timerSubscription;
  timeUnit: string;
  selectedEvent;
  remainingTimeString: string;
  pepeImgSrc: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedEvent = null;
    this.timeUnit = null;
    this.startTimer();
  }

  setRemainingTime(): void {
    if (this.selectedEvent == null || this.selectedEvent == undefined || this.timeUnit == null) {
      return;
    }

    let currentDate = new Date();
    let eventDate = this.getEventDate();

    let timeDifferentInSeconds = Math.round((eventDate.getTime() - currentDate.getTime()) / 1000);

    let differentInMinutes;
    let differentInSeconds;
    let differentInHours;
    let differentInDays;

    this.setPepeImage(timeDifferentInSeconds);

    switch (this.timeUnit) {
      case 'second':
        this.remainingTimeString = timeDifferentInSeconds + ' seconds remaining.';
        break;
      case 'minute':
        differentInMinutes = Math.floor(timeDifferentInSeconds / 60);
        differentInSeconds = timeDifferentInSeconds - differentInMinutes*60;
        this.remainingTimeString = differentInMinutes + ' minutes and ' + differentInSeconds + ' seconds remaining.';
        break;
      case 'hour':
        differentInHours = Math.floor(timeDifferentInSeconds / 3600);
        timeDifferentInSeconds -= differentInHours * 3600;
        differentInMinutes = Math.floor(timeDifferentInSeconds / 60);
        differentInSeconds = timeDifferentInSeconds - differentInMinutes*60;
        this.remainingTimeString = differentInHours + ' hours, ' + differentInMinutes + ' minutes and ' + differentInSeconds + ' seconds remaining.';
        break;
      case 'day':
        differentInDays = Math.floor(timeDifferentInSeconds / 86400);
        timeDifferentInSeconds -= differentInDays * 86400;
        differentInHours = Math.floor(timeDifferentInSeconds / 3600);
        timeDifferentInSeconds -= differentInHours * 3600;
        differentInMinutes = Math.floor(timeDifferentInSeconds / 60);
        differentInSeconds = timeDifferentInSeconds - differentInMinutes*60;
        this.remainingTimeString = differentInDays + ' days, ' + differentInHours + ' hours, ' + differentInMinutes + ' minutes and ' + differentInSeconds + ' seconds remaining.';
        break;
    }
  }

  setPepeImage(timeDiffrentInSeconds: number): void {

    if (this.selectedEvent.isHappyEvent) {
      this.setPepeImageIfWaiting(timeDiffrentInSeconds);
    }
    else {
      this.setPepeImageIfNotWaiting(timeDiffrentInSeconds);
    }

  }

  setPepeImageIfWaiting(timeDifferentInSeconds: number): void {

    /* 1 week or less */
    if (timeDifferentInSeconds < 604800) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-happy.jpg';
    }

    /* 1 month or less */
    else if (timeDifferentInSeconds < 2592000) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-sad.jpg';
    }

    /* 3 month or less */
    else if (timeDifferentInSeconds < 7776000) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-crying.jpg';
    }

    /* more than 3 months */
    else {
      this.pepeImgSrc = 'assets/images/pepe/pepe-hangman.jpg';
    }
  }

  setPepeImageIfNotWaiting(timeDifferentInSeconds: number): void {
    /* 1 week or less */
    if (timeDifferentInSeconds < 604800) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-hangman.jpg';
    }

    /* 1 month or less */
    else if (timeDifferentInSeconds < 2592000) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-crying.jpg';
    }

    /* 3 month or less */
    else if (timeDifferentInSeconds < 7776000) {
      this.pepeImgSrc = 'assets/images/pepe/pepe-sad.jpg';
    }

    /* more than 3 months */
    else {
      this.pepeImgSrc = 'assets/images/pepe/pepe-happy.jpg';
    }
  }

  getEventDate(): Date {
    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();
    let eventDate = new Date(currentYear, this.selectedEvent.month, this.selectedEvent.day);

    if (eventDate.getTime() < currentDate.getTime()) {
      eventDate.setFullYear(currentYear + 1);
    }

    return eventDate;
  }

  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => this.setRemainingTime());
  }

  /* Months are numbers from range 0...11 */
  events = [
    { name: 'Beginning of the academic year', day: 1, month: 9, isHappyEvent: false },
    { name: 'Winter examination session', day: 4, month: 1, isHappyEvent: false },
    { name: 'Summer examination session', day: 23, month: 5, isHappyEvent: false },
    { name: 'Winter Holidays', day: 23, month: 11, isHappyEvent: true },
    { name: 'Spring Holidays', day: 1, month: 3, isHappyEvent: true },
    { name: 'End of the academic year', day: 13, month: 6, isHappyEvent: true },
  ];
}