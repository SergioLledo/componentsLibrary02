import { Component } from '@angular/core';

@Component ({
    selector: "header-comp",
    templateUrl: './header.component.html',
})

export class HeaderComponent{
    public nombre_componente = 'HEADer 01';
    public lista_component = 'Texto sin sentido de prueba';
    public status: boolean = false;
    public menuExp: boolean = false;
    public hiMenu: boolean = false;

    public clickEvent() {
        this.status = !this.status;
      }
    
      public menuExpanse() {
        this.menuExp = !this.menuExp;
      }
      public hideMenu() {
        this.hiMenu = !this.hiMenu;
      }
}