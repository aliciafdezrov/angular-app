import { Component, OnInit } from '@angular/core';
import {PhotoEntity} from "../model/photoEntity";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-rotate',
  templateUrl: './rotate.component.html',
  styleUrls: ['./rotate.component.scss']
})
export class RotateComponent implements OnInit {
  photo: PhotoEntity;
  rotateForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.photo = {
      id: 8,
      src: "../../assets/images/8.jpg",
      title: "Photo 8"
    };
    this.rotateForm = this.formBuilder.group({
      step: ["10", [Validators.pattern]],
    });
  }

  ngOnInit(): void {
  }

  getStepErrorMessage(): string {
    if (this.rotateForm.get('step')?.hasError("pattern")) {
      return 'Step field only can be a number between 0 to 360';
    }

    return 'Not a valid step';
  }
}
