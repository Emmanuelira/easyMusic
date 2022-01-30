import { trigger, transition, style, animate, } from '@angular/animations';

export const fader =
    trigger('routeAnimations', [
        // TRANSIÇÃO ESPECÍFICA DA PÁGINA HOME PARA A LISTA 
        transition('* => homePage', [
            style({ opacity: 0 }),
            animate('2400ms ease', style({ opacity: 1 }))
        ]),
        transition('homePage => listaPage', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
        ]),
        // TRANSIÇÃO ENTRE QUAISQUER PÁGINAS 
        transition('* <=> *', [
            style({ opacity: 0 }),
            animate('600ms ease', style({ opacity: 1 }))
        ]),
    ]);