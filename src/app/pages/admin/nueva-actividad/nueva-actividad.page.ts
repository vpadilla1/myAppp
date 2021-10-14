import { Actividad } from '../../../models';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ToastController } from '@ionic/angular';





@Component({
  selector: 'app-nueva-actividad',
  templateUrl: './nueva-actividad.page.html',
  styleUrls: ['./nueva-actividad.page.scss'],
})
export class NuevaActividadPage implements OnInit {

  newActividad: Actividad ={
    id: this.firestoreService.getID(),
    titulo:'',
    punto:0,
    actividadI:null,
    actividadF:null,
  };

private path = 'Actividades/';

  constructor(public firestoreService: FirestoreService,
              public toastController: ToastController) {}

  ngOnInit() {
  }

  guardarActividad() {
    this.firestoreService.createDoc(this.newActividad, this.path, this.newActividad.id).then( res =>{
      this.presentToast('Guardado con exito');
      this.initActividad();
    }).catch(error =>{
      this.presentToast('NO se pudo guardar');
    });
    console.log('guardar');
  }



  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      color:'secondary',
    });
    toast.present();
  }

  initActividad(){
    this.newActividad ={
      id:'',
      titulo:'',
      punto:0,
      actividadI:null,
      actividadF: null,
    };
  }

}
