import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowcycleOverviewComponent } from './flowcycle-overview.component';

describe('FlowcycleOverviewComponent', () => {
  let component: FlowcycleOverviewComponent;
  let fixture: ComponentFixture<FlowcycleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowcycleOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowcycleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
