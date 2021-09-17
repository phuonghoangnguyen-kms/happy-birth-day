import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'message-popup',
    templateUrl: './message-popup.component.html',
    styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit {
    constructor(
        public dialogRef: MatDialogRef<MessagePopupComponent>) {
    }

    messages: string[] = [
        'Dear my girl'
    ]

    index = -1;

    ngOnInit(): void {
        const a = setInterval(() => {
            if (this.index === this.messages.length) { 
                clearInterval(a);
            }
            this.index++;
        }, 3500);
    }
}
