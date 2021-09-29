import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import './../../../../assets/js/smtp.js';
declare let Email: any;

@Component({
    selector: 'message-popup',
    templateUrl: './message-popup.component.html',
    styleUrls: ['./message-popup.component.scss']
})
export class MessagePopupComponent implements OnInit, AfterViewInit {
    constructor(
        public dialogRef: MatDialogRef<MessagePopupComponent>) {
    }

    messages: string[] = [
        'Messge 1',
        'Messge 2',
        'Messge 3',
        'Messge 4',
        'Messge 5'
    ]

    wishlist1: string;
    wishlist2: string;
    wishlist3: string;
    wishlist4: string;
    wishlist5: string;
    wishlist6: string;
    wishlist7: string;

    index = -1;

    ngOnInit(): void { }

    ngAfterViewInit(): void {
        for (let i = 0; i < this.messages.length; i++) {
            const e = document.getElementById(`image-${i}`);
            e.style.backgroundImage = `url("assets/images/messages/${i + 1}.jpg")`;
        }
    }

    previous(): void {
        if (this.index - 1 < -1) {
            return;
        }
        this.index--;
    }

    next(): void {
        if (this.index + 1 > this.messages.length + 2) {
            return;
        }

        if (this.index == this.messages.length + 1) {
            if (this.verifyAnyWishlist()) {
                this.sendEmail();
            } else {
                alert('Hmmm, so sad when you don\'t input any things :\'(');
            }
        }

        this.index++;
    }

    sendEmail(): void {

        const wishlist = `<p>1/${this.wishlist1}</p>
                            <p>2/${this.wishlist2}</p>
                            <p>3/${this.wishlist3}</p>
                            <p>4/${this.wishlist4}</p>
                            <p>5/${this.wishlist5}</p>
                            <p>6/${this.wishlist6}</p>
                            <p>7/${this.wishlist7}</p>`;

        Email.send({
            SecureToken: '197eae5e-4b78-4f17-ae16-0bde352a5e10',
            To: 'hoangtuhoangphuong@gmail.com',
            From: 'nhphuong020193@gmail.com',
            Subject: 'Test Email',
            Body: wishlist
        }).then();
    }

    verifyAnyWishlist(): boolean {
        if (this.wishlist1
            || this.wishlist2
            || this.wishlist3
            || this.wishlist4
            || this.wishlist5
            || this.wishlist6
            || this.wishlist7) {
            return true;
        }

        return false;
    }
}
