import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

import { SubHeaderComponent } from '../../components/sub-header/sub-header.component';

@Component({
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [SubHeaderComponent],
  standalone: true,
})
export class SettingsPage {
  private readonly location: Location = inject(Location);

  back() {
    this.location.back();
  }
}
