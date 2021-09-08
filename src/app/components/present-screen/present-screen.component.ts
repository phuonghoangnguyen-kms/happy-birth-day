import { Component, OnInit } from '@angular/core';
import mojs from '@mojs/core';

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

    }

    public changeScreen(screen: number): void {
        this.screen = screen;

        if (screen === 2) {
            setTimeout(() => {
                document.addEventListener('click', event => {
                    this.bursty(event.pageX, event.pageY);
                });

                let a = setInterval(() => {
                    this.randomizedConfetti();
                }, 500);

                let b = setTimeout(() => {
                    setInterval(() => {
                        this.removeElement();
                    }, 500);
                }, 2500);

                setTimeout(() => {
                    clearInterval(a);
                    clearInterval(b);
                 }, 300000);
            }, 7000);
        }
    }

    private bursty(x, y) {
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { 'white': '#25D2FF' },
                duration: 2000
            }
        }).tune({
            x: x,
            y: y,
        });

        burst.replay();
    }

    private randomizedConfetti() {
        let randomX = Math.floor(Math.random() * (document.body.clientWidth - 100) + 0);
        let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
        const burst = new mojs.Burst({
            left: 0,
            top: 0,
            radius: { 0: 200 },
            count: 20,
            degree: 360,
            children: {
                fill: { 'white': '#25D2FF' },
                duration: 2000
            }
        }).tune({
            x: randomX,
            y: randomY,
        });

        burst.replay();
    }

    private removeElement(): void {
        const element = document.querySelector('[data-name="mojs-shape"');
        if (element) {
            element.remove();
        }
    }
}