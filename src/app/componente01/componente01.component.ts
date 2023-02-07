import { Component } from '@angular/core';

@Component ({
    selector: "comp01",
    templateUrl: './componente01.component.html',
})

export class Componente01Component{
    public nombre_componente = 'Componente 01';
    public lista_component = 'Texto sin sentido de prueba';
}