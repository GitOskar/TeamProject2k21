import { Component, OnInit } from '@angular/core';
import { EmailDangerPointsService, EmailDangerData } from 'src/app/service/email-danger-points/email-danger-points.service';

@Component({
  selector: 'email-danger-score',
  templateUrl: './email-danger-score.component.html',
  styleUrls: ['./email-danger-score.component.css']
})
export class EmailDangerScoreComponent implements OnInit {

  emailDangerData: EmailDangerData;

  constructor(private service: EmailDangerPointsService) { }

  ngOnInit(): void {
  }

  public checkEmailDangerScore(firstName: string, lastName: string, subject: string, emailBody: string): void {
    
    if (firstName.trim() == "" || lastName.trim() == "" || subject.trim() == "" || emailBody.trim() == "") {
      return;
    }

    this.service.checkEmailDangerScore(firstName, lastName, subject, emailBody).subscribe(
      value => this.emailDangerData = value
    );
  }
}