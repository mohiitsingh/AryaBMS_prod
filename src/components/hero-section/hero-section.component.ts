import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-hero-section',
  imports: [BannerComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('videoIframe', { static: false }) videoIframe!: ElementRef<HTMLIFrameElement>;

  private baseUrl = 'https://www.youtube.com/embed/_mP_1dh_ThE?mute=1&rel=0';
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private cdRef: ChangeDetectorRef) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);
  }

  ngAfterViewInit(): void {
    if (this.videoIframe) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const autoplayUrl = this.baseUrl + '&autoplay=1';
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(autoplayUrl);
  
            this.cdRef.detectChanges(); // ✅ Trigger change detection
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      observer.observe(this.videoIframe.nativeElement);
    }
  }

}
