import { Component } from '@angular/core';

@Component ({
    selector: "page01",
    templateUrl: './page01.component.html',
    styleUrls: ['./page01.component.scss']
})

export class Page01Component{
    public titulo_page = 'PRIMERA PAGINA';
    public text_page = 'Texto prueba primera pagina de ts';
}