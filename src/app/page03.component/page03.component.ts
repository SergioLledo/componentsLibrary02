import { Component } from '@angular/core';

@Component ({
    selector: "page03",
    templateUrl: './page03.component.html',
    styleUrls: ['./page03.component.scss'],
})

export class Page03Component{
    public titulo_page = 'Tercera PAGINA';
    public text_page = 'Soy el &%?! Jesucristo';
    public status: boolean = false;
    public color01: boolean = false;
    public color02: boolean = false;
    public color03: boolean = false;

    public clickEvent() {
        this.status = !this.status;
      }
      public color01Click() {
        this.color01 = !this.color01;
      }
      public color02Click() {
        this.color02 = !this.color03;
      }
      public color03Click() {
        this.color03 = !this.color03;
      }
}