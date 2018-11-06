import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoudComponent } from './notfoud.component';

describe('NotfoudComponent', () => {
  let component: NotfoudComponent;
  let fixture: ComponentFixture<NotfoudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
