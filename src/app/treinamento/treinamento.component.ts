import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TRAINING_MOCK } from '../mocks/training_mock';
import { ITraining } from '../Models/Treinamento';

@Component({
  selector: 'app-treinamento',
  templateUrl: './treinamento.component.html',
  styleUrls: ['./treinamento.component.css']
})
export class TreinamentoComponent implements OnInit {

  training:ITraining[] = TRAINING_MOCK;

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

  openXl(content : any) {
		this.modalService.open(content, { size: 'xl',  centered: true, scrollable: true });
	}

  ngOnInit(): void {
  }

}
