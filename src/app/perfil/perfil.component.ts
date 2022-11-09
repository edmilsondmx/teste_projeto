import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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


  ngOnInit(): void {}
}
