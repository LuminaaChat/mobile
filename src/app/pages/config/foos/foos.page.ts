import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-foos',
  templateUrl: './foos.page.html',
  styleUrls: ['./foos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FoosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
