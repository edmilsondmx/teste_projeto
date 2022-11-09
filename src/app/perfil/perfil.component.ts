import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TRAINING_MOCK } from '../mocks/training_mock';
import { USER_MOCK } from '../mocks/user_mock';
import { ITraining } from '../Models/Treinamento';
import { IUser } from '../Models/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {

  users: IUser[] = USER_MOCK;
  
  trainings: ITraining[] = TRAINING_MOCK;

  trainingModel!:ITraining;

  category:string = 'todos';
  filters!:ITraining[];

  constructor(
    private config: NgbModalConfig, 
    private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  openXl(content: any, training:ITraining) {
    this.trainingModel = training;
    this.modalService.open(content, {
      size: 'lg',
      centered: true,
      scrollable: true,
    });
  }


  ngOnInit(): void {
    this.filtrar();
  }

  filtrar(){
    if(this.category != 'todos'){
      this.filters =  this.trainings.filter( item => item.category == this.category)
    }
    else{

      this.filters = this.trainings;
    }
  }
}
