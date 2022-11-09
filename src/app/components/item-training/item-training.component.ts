import { Component, Input, OnInit } from '@angular/core';
import { ITraining } from 'src/app/Models/Treinamento';

@Component({
  selector: 'app-item-training',
  templateUrl: './item-training.component.html',
  styleUrls: ['./item-training.component.css']
})
export class ItemTrainingComponent implements OnInit {

  @Input()
  item:ITraining = {
    id:0,
    url:'',
    title:'',
    description:'',
    teacher:'',
    duration:0,
    status:'',
    category:'',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
