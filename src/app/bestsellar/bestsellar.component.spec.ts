import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellarComponent } from './bestsellar.component';

describe('BestsellarComponent', () => {
  let component: BestsellarComponent;
  let fixture: ComponentFixture<BestsellarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
