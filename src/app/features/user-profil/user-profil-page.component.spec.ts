import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilPageComponent } from './user-profil-page.component';

describe('UserProfilPageComponent', () => {
  let component: UserProfilPageComponent;
  let fixture: ComponentFixture<UserProfilPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
