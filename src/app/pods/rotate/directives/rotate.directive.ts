import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: 'img[appRotate]'
})
export class RotateDirective implements OnInit {
  // @ts-ignore
  @Input() step: string;
  // @ts-ignore
  @Input('appRotate') rotate: string;
  private defaultStep = "10";
  private count: number;

  constructor(private el: ElementRef) {
    this.count = 0;
  }

  private rotateElement(step: number) {
    this.el.nativeElement.style.transform = `rotate(${step}deg)`;
  }

  ngOnInit() {
    this.count += Number(this.rotate) || 0;
    this.el.nativeElement.style.transform = `rotate(${this.count}deg)`;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const stepToApply = Number(this.step ?? this.defaultStep);
    if (event.button == 0 && event.shiftKey) {
      this.count -= stepToApply;
    } else {
      this.count += stepToApply;
    }
    this.rotateElement(this.count);
  }
}
