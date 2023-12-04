import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router, RouterOutlet} from "@angular/router";
import {addIcons} from "ionicons";
import {cog, cogOutline, exitOutline} from "ionicons/icons";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterOutlet]
})
export class OverviewPage implements OnInit {

  constructor(private router: Router) {
    addIcons({
      exitOutline,
      cog,
      cogOutline,
    });
  }

  async navigate(path: string) {
    await this.router.navigate([`/${path}`]);
  }

  ngOnInit() {
  }

}
