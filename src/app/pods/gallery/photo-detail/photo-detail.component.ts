import {Component, Input, OnInit} from '@angular/core';
import {PhotoEntity} from "../../rotate/model/photoEntity";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  @Input() selectedPhoto: PhotoEntity;
  @Input() width: number;
  @Input() height: number;

  constructor() {
    this.width = 450;
    this.height = 250;
    this.selectedPhoto = {
      id: 0,
      src: '',
      title: ''
    };
  }

  ngOnInit(): void {
  }
}
