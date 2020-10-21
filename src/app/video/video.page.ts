import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
//import * as moment from 'moment';



@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private alertController: AlertController, private data: DataService, private platform: Platform ,private http: HTTP, private file: File ){ }
  urlVideo: string = "";
  urlScreenshot: string = "";

  ngOnInit() {
    this.urlVideo = this.data.getData() + "/?action=stream";
    console.log(this.urlVideo);
    this.urlScreenshot = this.data.getData() + "/?action=snapshot";

  }

  capturar() {
    //const filePath = this.file.dataDirectory + this.fileName;
    //this.downloadFileAndStore();
    this.downloadImg();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Imagen Capturada',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  /* public downloadImg(): void {
    const fileTransfer: FileTransferObject = this.transfer.create();
    console.log(this.file.applicationDirectory);
    fileTransfer.download(this.url, this.file.dataDirectory + "saved.jpg").then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
        alert("Error dowloading");
    });
  } */
  downloadImg() {
    
    const dataName = new Date().getTime();
    //console.log(dataName);
    //console.log(this.file.externalApplicationStorageDirectory);
    if (this.platform.is('android')) {
      this.file.checkDir(this.file.externalApplicationStorageDirectory, 'mjpgFiles').then(response => {
        console.log('Directory exists' + response);
      }).catch(err => {
        console.log('Directory doesnot exists' + JSON.stringify(err));
        this.file.createDir(this.file.externalApplicationStorageDirectory, 'mjpgFiles', false).then(response => {
          console.log('Directory created'+ response);
        }).catch(err => {
          console.log('Directory not created'+ JSON.stringify(err));
        }
        )
      })
      this.http.downloadFile(this.urlScreenshot, {}, {}, this.file.externalApplicationStorageDirectory + '/mjpgFiles/' + 'IMG_'+ dataName  + '.jpg').then(response => {
          console.log('file download response',response);
        })
        .catch((err) =>{
          console.log('error in file download',err);
        });
    }
    this.presentAlert();
  }
}
