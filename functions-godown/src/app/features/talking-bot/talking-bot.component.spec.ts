import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkingBotComponent } from './talking-bot.component';

describe('TalkingBotComponent', () => {
  let component: TalkingBotComponent;
  let fixture: ComponentFixture<TalkingBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalkingBotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkingBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
