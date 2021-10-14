import { Component, OnInit } from '@angular/core';
import { User } from '../../../models';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estudiante.page.html',
  styleUrls: ['./listado-estudiante.page.scss'],
})
export class ListadoEstudiantePage implements OnInit {

  user: User[]=[];

  private path = 'UserEStudiante/';
  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.firestoreService.getCollection<User>(this.path).subscribe( res=>{
      console.log(res);
      this.user= res;
    });
  }

}
