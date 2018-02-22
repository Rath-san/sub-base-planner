import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsBarComponent } from './materials-bar.component';

describe('MaterialsBarComponent', () => {
  let component: MaterialsBarComponent;
  let fixture: ComponentFixture<MaterialsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
