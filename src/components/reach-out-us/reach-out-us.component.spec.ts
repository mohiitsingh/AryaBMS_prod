import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachOutUsComponent } from './reach-out-us.component';

describe('ReachOutUsComponent', () => {
  let component: ReachOutUsComponent;
  let fixture: ComponentFixture<ReachOutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachOutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachOutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
