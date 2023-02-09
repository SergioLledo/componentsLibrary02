import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ds-button',
  template: ` <button
    type="button"
    (click)="onClick.emit($event)"
    [ngClass]="classes"
  >
    {{ label }}
  </button>`,
  styleUrls: ['./../scss/5-elements/_elements.button.scss'],
})
export default class ButtonComponent {

  @Input()
  
  primary = false;
  @Input()

  disabled = false;
  @Input()
  label = 'Button';

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const atr = this.disabled ? 'disabled' : '';
    const mode = this.primary ? 'ds-button--primary' : 'ds-button--secondary';

    return ['ds-button', mode, atr];
  }
}
