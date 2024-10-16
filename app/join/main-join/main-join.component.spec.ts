import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJoinComponent } from './main-join.component';

describe('MainJoinComponent', () => {
  let component: MainJoinComponent;
  let fixture: ComponentFixture<MainJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
