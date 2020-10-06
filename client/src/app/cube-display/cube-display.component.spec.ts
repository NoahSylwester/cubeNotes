import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeDisplayComponent } from './cube-display.component';

describe('CubeDisplayComponent', () => {
  let component: CubeDisplayComponent;
  let fixture: ComponentFixture<CubeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
