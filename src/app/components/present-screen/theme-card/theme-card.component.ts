import {
    Component,
    EventEmitter,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { EnvelopeComponent } from '../envelope/envelope.component';

@Component({
    selector: 'theme-card',
    templateUrl: './theme-card.component.html',
    styleUrls: ['./theme-card.component.scss']
})
export class ThemeCardComponent implements OnInit {
    @Output() callback: EventEmitter<any> = new EventEmitter();
    @ViewChild('envelope') envelope: EnvelopeComponent;

    constructor() { }

    ngOnInit(): void { }
}
