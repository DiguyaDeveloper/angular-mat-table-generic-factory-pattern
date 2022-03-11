import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTemplateRefComponent } from './image-template-ref.component';

describe('ImageTemplateRefComponent', () => {
  let component: ImageTemplateRefComponent;
  let fixture: ComponentFixture<ImageTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageTemplateRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
