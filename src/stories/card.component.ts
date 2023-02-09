import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meta, Story } from '@storybook/angular';


@Component({
  selector: 'storybook-button',
  template: ` 
  
  <!-- <div
  class="pepe"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  <h1>
      {{ title }}
  </h1>
  <p>{{text}}</p>
</div> -->

<div 
    class="card-product"
    [ngClass]="classes"
>
    <div class="card-product__img-box img01">
        <img class="img-box" src="pic_trulli.jpg">
    </div>
    <div class="card-product__after">
        <p>Air<br/>Jordan</p>
    </div>
    <div class="card-product__content">
        <h2>Nikee Air Jordan</h2>
        <div class="card-product__size">
            <h3>size: </h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
        </div>
        <div class="card-product__color">
            <h3>Color: </h3>
            <button type="button" ></button>
            <button type="button" ></button>
            <button type="button" ></button>
        </div>
        <a href="#">Comprar</a>
    </div>
</div>

`,
  styleUrls: ['./card.css', './../scss/6-components/_components.card.scss'],
})
export default class CardComponent {

  @Input()
  primary = true;
  backgroundColor?: string;
  title = 'Esto es el titulo';
  text = 'Esto es el contenido de la card'


  public get classes(): string[] {
    const mode = this.primary ? 'storybook-card--primary' : 'storybook-card--secondary';

    return ['storybook-card', mode];
  }

}