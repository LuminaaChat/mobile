import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.page.html',
  styleUrls: ['./password-forgot.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PasswordForgotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
