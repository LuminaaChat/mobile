import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
})
export class SettingsPage {
  private readonly location: Location = inject(Location);

  back() {
    this.location.back();
  }
}
