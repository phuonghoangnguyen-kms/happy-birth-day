import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessagePopupComponent } from '../message-popup/message-popup.component';

@Component({
    selector: 'cake',
    templateUrl: './cake.component.html',
    styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {

    show = false;

    constructor(private dialog: MatDialog) { }

    ngOnInit(): void {
        //this.playAudio();
        setTimeout(() => {
            this.show = true;
        }, 6500);
    }

    playAudio() {
        let audio = new Audio();
        audio.src = "../../../../assets/happy-birthday.mp3";
        audio.loop = true;
        audio.load();
        audio.play();
    }

    openMessage(): void {
        const dialogRef = this.dialog.open(MessagePopupComponent);
    }
}
