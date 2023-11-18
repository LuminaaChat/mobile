import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Group } from '../../../../../chatapi';

@Component({
  selector: 'app-group-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-list-item.component.html',
  styleUrl: './group-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListItemComponent {
  @Input() group?: Group;
}
