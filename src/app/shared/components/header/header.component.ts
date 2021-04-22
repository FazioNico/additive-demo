import { Component, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from '../modal-info/modal-info.component';
import firebase from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

  constructor(
    public modalCtrl: ModalController,
    public auth: AngularFireAuth
  ) {
  }

  async openModal() {
    const ionModal = await this.modalCtrl.create({
      component: ModalInfoComponent
    });
    await ionModal.present();
  }

  async login() {
    const {user = {}} = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('user data-> ', user);
  }

  logout() {
    this.auth.signOut();
  }
}
