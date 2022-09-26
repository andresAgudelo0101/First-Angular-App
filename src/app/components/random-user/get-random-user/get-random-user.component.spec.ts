import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRandomUserComponent } from './get-random-user.component';

describe('GetRandomUserComponent', () => {
  let component: GetRandomUserComponent;
  let fixture: ComponentFixture<GetRandomUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRandomUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRandomUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
