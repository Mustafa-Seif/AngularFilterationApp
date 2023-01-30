import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertionComponent } from './filtertion.component';

describe('FiltertionComponent', () => {
  let component: FiltertionComponent;
  let fixture: ComponentFixture<FiltertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
