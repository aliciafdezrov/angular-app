import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhotoEntity} from "../../rotate/model/photoEntity";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  @Input() photos: PhotoEntity[];
  @Input() selectedPhoto: PhotoEntity;
  @Output()
  selectEvent: EventEmitter<PhotoEntity> = new EventEmitter();
  startPagination: number;

  constructor() {
    this.startPagination = 0;
    this.photos = [];
    this.selectedPhoto = {
      id: 0,
      src: '',
      title: ''
    };
  }

  ngOnInit(): void {
  }

  select(photo: PhotoEntity) {
    this.selectEvent.emit(photo);
  }

  paginateForward() {
    this.startPagination = this.startPagination+3;
  }

  paginateBackward() {
    this.startPagination = this.startPagination-3;
  }
}
