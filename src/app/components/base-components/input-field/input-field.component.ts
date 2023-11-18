import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  standalone: true,
})
export class InputFieldComponent {
  @Input()
  label = 'Input Field';

  @Input({ transform: booleanAttribute })
  disable = false;

  @Input()
  type: 'text' | 'password' = 'text';
}
