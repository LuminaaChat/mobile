import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-group-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-list-item.component.html',
  styleUrl: './group-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupListItemComponent {
  @Input() label = '';
  @Output() itemClicked = new EventEmitter();
}
