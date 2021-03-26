import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() title: string;

  constructor(
    public modalCtrl: ModalController
  ) {
  }

  async openModal() {
    const ionModal = await this.modalCtrl.create({
      component: ModalInfoComponent
    });
    await ionModal.present();
  }
}
