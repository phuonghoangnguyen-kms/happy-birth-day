import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'theme-card',
    templateUrl: './theme-card.component.html',
    styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent implements OnInit {
    @Output() callback: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit(): void { }
}
