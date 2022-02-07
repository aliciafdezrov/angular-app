import { Injectable } from '@angular/core';
import {PhotoEntity} from "../../model/photoEntity";

const mockedPhotos = [
  {
    id: 1,
    src: "../../assets/images/1.jpg",
    title: "Photo 1"
  },
  {
    id: 2,
    src: "../../assets/images/2.jpg",
    title: "Photo 2"
  },
  {
    id: 3,
    src: "../../assets/images/3.jpg",
    title: "Photo 3"
  },
  {
    id: 4,
    src: "../../assets/images/4.jpg",
    title: "Photo 4"
  },
  {
    id: 5,
    src: "../../assets/images/5.jpg",
    title: "Photo 5"
  },
  {
    id: 6,
    src: "../../assets/images/6.jpg",
    title: "Photo 6"
  },
  {
    id: 7,
    src: "../../assets/images/7.jpg",
    title: "Photo 7"
  },
  {
    id: 8,
    src: "../../assets/images/8.jpg",
    title: "Photo 8"
  },
];

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private photos: PhotoEntity[];

  constructor() {
    this.photos = mockedPhotos;
  }

  get() {
    return this.photos;
  }
}
