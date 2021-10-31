import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMComponent } from './edit-m.component';

describe('EditMComponent', () => {
  let component: EditMComponent;
  let fixture: ComponentFixture<EditMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
