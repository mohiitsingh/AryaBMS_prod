import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2
} from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {
  description: string = "Enroll Now !! Admission are open";
  @ViewChild('slideText') slideTextRef!: ElementRef;
  @ViewChild('banner') bannerRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.setScrollAnimation();
  }

  shouldShowBanner(): boolean {
    return this.description.length > 0;
  }

  setScrollAnimation(): void {
    const slideTextEl = this.slideTextRef.nativeElement;
    const bannerEl = this.bannerRef.nativeElement;

    const textWidth = slideTextEl.offsetWidth;
    const bannerWidth = bannerEl.offsetWidth;

    const distance = textWidth + bannerWidth;

    const speed = 100; // pixels per second
    const duration = distance / speed;

    // Set dynamic animation with calculated duration
    this.renderer.setStyle(slideTextEl, 'animation', `slide ${duration}s linear infinite`);
  }

}
