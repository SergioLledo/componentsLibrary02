import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component ({
    selector: "page02",
    templateUrl: './page02.component.html',
    styleUrls: ['./page02.component.scss'],
})


export class Page02Component{

    public actNotificator: boolean = false;
    public expSearch: boolean = false;

    public titulo_page = 'SEGUNDA PAGINA';
    public text_page = 'Soy el &%?! Jesucristo';

    public expandSearch() {
        this.expSearch = !this.expSearch;
      }
    public activeNotificator() {
        this.actNotificator = !this.actNotificator;
      }
}