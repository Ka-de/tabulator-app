import { animate, state, style, transition, trigger } from "@angular/animations";

export const slide = trigger('slide', [
    transition('void <=> *', [
        animate(100, style({opacity: .1, transform: 'translateX(-20%)'})),
        animate(100, style({opacity: .2, transform: 'translateX(-25%)'})),
        animate(100, style({opacity: .3, transform: 'translateX(-20%)'})),
        animate(100, style({opacity: .6, transform: 'translateX(-25%)'})),
        animate(100, style({opacity: .7, transform: 'translateX(-20%)'})),
        animate(100, style({opacity: .8, transform: 'translateX(-25%)'})),
        animate(1000, style({opacity: 1, transform: 'translateX(0)'}))
    ])
]);