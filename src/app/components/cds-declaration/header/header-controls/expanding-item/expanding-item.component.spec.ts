import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingItemComponent } from './expanding-item.component';

describe('ExpandingItemComponent', () => {
  let component: ExpandingItemComponent;
  let fixture: ComponentFixture<ExpandingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
