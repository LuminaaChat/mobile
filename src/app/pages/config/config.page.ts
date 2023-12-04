import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {addIcons} from "ionicons";
import {
  cog, cogOutline, exitOutline,
} from "ionicons/icons";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class ConfigPage implements OnInit {
  constructor(private router: Router) {
    addIcons({
      exitOutline,
      cog,
      cogOutline,
    });
  }

  async navigate(path: string) {
    await this.router.navigate([`./${path}`]);
  }

  ngOnInit() {
  }

}