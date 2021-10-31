import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarqueComponent } from './add-marque.component';

describe('AddMarqueComponent', () => {
  let component: AddMarqueComponent;
  let fixture: ComponentFixture<AddMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
