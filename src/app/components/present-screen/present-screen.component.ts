import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'present-screen',
    templateUrl: './present-screen.component.html',
    styleUrls: ['./present-screen.component.scss']
})
export class PresentScreenComponent implements OnInit {

    active = false;
    screen = 1;

    constructor() { }

    ngOnInit(): void {
        // setTimeout(() => {
        //     this.screen = 2;
        // }, 3000);
    }
}
