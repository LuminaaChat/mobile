import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Group } from '../../../../../chatapi';
import { GroupListItemComponent } from '../group-list-item/group-list-item.component';

@Component({
  selector: 'app-group-list',
  standalone: true,
  imports: [CommonModule, GroupListItemComponent],
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListComponent {
  @Input() groups: Group[] = [];
  @Output() itemClicked = new EventEmitter<Group>();
}
