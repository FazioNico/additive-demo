import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraResultType } from '@capacitor/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-user-profil-page',
  templateUrl: './user-profil-page.component.html',
  styleUrls: ['./user-profil-page.component.scss']
})
export class UserProfilPageComponent implements OnInit {

  avatarURL: any = null;

  constructor(
    private _storage: AngularFireStorage,
    private _auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  async takePict() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    const imageUrl = image.webPath;
    this.avatarURL = imageUrl;
  }

  async savePict() {
    const blob = await this._readAsBlob(this.avatarURL);
    const timeStamp = Date.now();
    const {uid = null} = await this._auth.currentUser;
    const ref = this._storage.ref(timeStamp + '_' + uid + '.jpeg');
    const task = ref.put(blob);
    await task.then();
    const url = await ref.getDownloadURL().toPromise();
    console.log(url);
  }

  private async _readAsBlob(webPath: string) {
    // Fetch the file and read as a blob
    const response = await fetch(webPath);
    const blob = await response.blob();
    return blob;
  }
}

