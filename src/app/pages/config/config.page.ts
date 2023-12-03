import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import {
  cog, cogOutline, exitOutline,
} from "ionicons/icons";

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfigPage implements OnInit {
  constructor() {
    addIcons({
      exitOutline,
      cog,
      cogOutline,
    });
  }

  ngOnInit() {
  }

}
