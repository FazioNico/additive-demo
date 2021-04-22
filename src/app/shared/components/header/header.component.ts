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

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
  }
}
