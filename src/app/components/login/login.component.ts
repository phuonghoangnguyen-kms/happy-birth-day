import {
    Component,
    EventEmitter,
    OnInit,
    Output
} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @Output() next: EventEmitter<any> = new EventEmitter();

    day: number;
    month: number;
    year: number;
    isFocus = false;
    openBox = false;

    constructor() { }

    ngOnInit(): void { }

    verify(): boolean {
        return this.day === 24 && this.month === 10 && this.year === 1996;
    }

    open(): void {
        this.next.emit();
    }
}
