import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  imports: [ButtonComponent],
  standalone: true,
})
export class ComponentPage {
  constructor() {}
}
