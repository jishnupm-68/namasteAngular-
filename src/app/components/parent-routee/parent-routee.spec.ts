import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRoutee } from './parent-routee';

describe('ParentRoutee', () => {
  let component: ParentRoutee;
  let fixture: ComponentFixture<ParentRoutee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentRoutee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentRoutee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
