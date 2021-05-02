import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { MoriaParserService, Teacher } from 'src/app/service/moria-parser/moria-parser.service';

@Component({
  selector: 'hangman-moria-game',
  templateUrl: './hangman-moria-game.component.html',
  styleUrls: ['./hangman-moria-game.component.css']
})
export class HangmanMoriaGameComponent implements OnInit {

  teacherList: Teacher[];
  alphabet = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź", "-"];
  password: string;
  hiddenPassword: string;
  misses: number;
  gameStatus: string;

  constructor(private service: MoriaParserService) { }

  ngOnInit(): void {
    this.downloadTeacherListAndStartNewGame();
  }

  prepareNewGame(): void {
    let teacherNumber = this.getRandomTeacher();
    this.preparePassword(teacherNumber);
    this.prepareHiddenPassword();
    this.misses = 0;
    this.gameStatus = 'DURING_PLAY';
    this.setHangmanImage();
  }

  preparePassword(teacherNumber: number) {
    this.password = this.teacherList[teacherNumber].first_name + ' ' + this.teacherList[teacherNumber].last_name;
  }

  prepareHiddenPassword(): void {
    let hiddenPassword = "";

    for (let i = 0; i < this.password.length; i++) {
      if (this.password.charAt(i) != " ") {
        hiddenPassword += "-";
      }
      else {
        hiddenPassword += " ";
      }
    }

    this.hiddenPassword = hiddenPassword;
  }

  downloadTeacherListAndStartNewGame(): void {
    this.service.getItInstituteTeachers().subscribe(teacherList => {
      teacherList.forEach(teacher => {
        teacher.first_name = teacher.first_name.toUpperCase();
        teacher.last_name = teacher.last_name.toUpperCase();
      })
      this.teacherList = teacherList;
      this.prepareNewGame();
    })
  }

  reset(): void {
    this.prepareNewGame();
  }

  check(letter: string): void {

    if (document.getElementById(letter).className != "letter") {
      return;
    }
    
    let finded = false;
    let hiddenPassword = this.hiddenPassword;

    for (let i = 0; i < this.password.length; i++) {
      if (this.password.charAt(i) == letter) {
        hiddenPassword = this.replaceAt(hiddenPassword, i, this.password.charAt(i));
        finded = true;
      }
    }

    if (!finded) {
      document.getElementById(letter).className = "letterBad";
      this.misses++;
      this.setHangmanImage();

      if (this.misses == 9) {
        this.gameStatus = 'DEFEAT';
        this.playLose();
      }
    }
    else {
      document.getElementById(letter).className = "letterGood";
    }

    this.hiddenPassword = hiddenPassword;

      if (hiddenPassword == this.password) {
        this.gameStatus = 'VICTORY';
        this.playWin();
      }
  }

  replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
  }

  setHangmanImage() {
    this.setImage('hangmanImg', 'assets/images/hangman/s' + this.misses + '.jpg');
  }

  setImage(id: string, path: string) {
    (document.getElementById(id) as HTMLImageElement).src = path;
  }

  getRandomTeacher(): number {
    return Math.floor(Math.random() * this.teacherList.length);
  }

  playWin(){
    this.playMusic("assets/sounds/win-hangman.mp3");
  }

  playLose(){
    this.playMusic("assets/sounds/lose-hangman.mp3")
  }
  
  playMusic(path: string): void {
    let audio = new Audio();
    audio.volume = 0.2;
    audio.src = path;
    audio.load();
    audio.play();
  }
}