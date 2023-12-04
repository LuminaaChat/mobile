import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane
} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {
  archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp
} from "ionicons/icons";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet]
})
export class EmployeesPage implements OnInit {
  themeToggle = false;

  public appPages = [
    {title: 'Inbox', url: '/folder/inbox', icon: 'mail'},
    {title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane'},
    {title: 'Favorites', url: '/folder/favorites', icon: 'heart'},
    {title: 'Archived', url: '/folder/archived', icon: 'archive'},
    {title: 'Trash', url: '/folder/trash', icon: 'trash'},
    {title: 'Spam', url: '/folder/spam', icon: 'warning'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() {
    addIcons({
      mailOutline,
      mailSharp,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp
    });
  }

  ngOnInit(): void {
  }

}
