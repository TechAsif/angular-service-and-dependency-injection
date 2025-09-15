import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdupointCatalogComponent } from './edupoint-catalog.component';

describe('EdupointCatalogComponent', () => {
  let component: EdupointCatalogComponent;
  let fixture: ComponentFixture<EdupointCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdupointCatalogComponent]
    });
    fixture = TestBed.createComponent(EdupointCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
