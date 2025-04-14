import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBmsComponent } from './about-bms.component';

describe('AboutBmsComponent', () => {
  let component: AboutBmsComponent;
  let fixture: ComponentFixture<AboutBmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutBmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
