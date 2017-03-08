import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocAddModalComponent } from '../poc-add-modal/poc-add-modal.component';

describe('PocAddModalComponent', () => {
  let component: PocAddModalComponent;
  let fixture: ComponentFixture<PocAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
