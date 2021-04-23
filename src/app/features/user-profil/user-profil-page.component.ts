import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-user-profil-page',
  templateUrl: './user-profil-page.component.html',
  styleUrls: ['./user-profil-page.component.scss']
})
export class UserProfilPageComponent implements OnInit {

  avatarURL: string = null;

  constructor() { }

  ngOnInit(): void {
  }

  async takePict() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    console.log('--->', imageUrl);
  }
}
