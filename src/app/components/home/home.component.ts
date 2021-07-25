import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    step = 1;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(res => {
            this.step = res.step ? Number(res.step) : 1;
        });
    }

    next(): void {
        this.step += 1;
        this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: { step: this.step } });
    }
}
