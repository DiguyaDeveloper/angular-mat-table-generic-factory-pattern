import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVerticalBadgeComponent } from './table-vertical-badge.component';

describe('TableVerticalBadgeComponent', () => {
  let component: TableVerticalBadgeComponent;
  let fixture: ComponentFixture<TableVerticalBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVerticalBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVerticalBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
