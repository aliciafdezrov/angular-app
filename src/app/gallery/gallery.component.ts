import { Component, OnInit } from '@angular/core';
import {PhotosService} from "../services/photos/photos.service";
import {PhotoEntity} from "../model/photoEntity";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  photos: PhotoEntity[];
  selectedPhoto: PhotoEntity;
  width: number;
  height: number;
  interval: number | undefined;
  startPagination: number;

  constructor(private photosService: PhotosService) {
    this.photos = photosService.get();
    this.selectedPhoto = this.photos[0];
    this.width = 450;
    this.height = 250;
    this.interval = 0;
    this.startPagination = 0;
  }

  ngOnInit(): void {
  }

  select(photo: PhotoEntity) {
    this.selectedPhoto = {...photo};
  }

  previous() {
    const currentSelectedPhotoIndex = this.photos.findIndex(photo => photo.id === this.selectedPhoto?.id);
    this.selectedPhoto = this.photos[currentSelectedPhotoIndex-1];
  }

  next() {
    const currentSelectedPhotoIndex = this.photos.findIndex(photo => photo.id === this.selectedPhoto?.id);
    this.selectedPhoto = this.photos[currentSelectedPhotoIndex+1];
  }

  increase() {
    this.width += 50;
    this.height += 50;
  }

  decrease() {
    this.width -= 50;
    this.height -= 50;
  }

  play() {
    this.interval = setInterval(() => {
      if (this.selectedPhoto.id < 8) {
        this.next()
      } else {
        this.selectedPhoto = this.photos[0];
      }
    },2000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = 0;
  }

  isTimerDesactivated() {
    return this.interval === 0;
  }

  paginateForward() {
    this.startPagination = this.startPagination+3;
  }

  paginateBackward() {
    this.startPagination = this.startPagination-3;
  }
}
