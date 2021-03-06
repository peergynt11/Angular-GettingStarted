import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDetailComponent } from './mobile-detail.component';

describe('MobileDetailComponent', () => {
  let component: MobileDetailComponent;
  let fixture: ComponentFixture<MobileDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
