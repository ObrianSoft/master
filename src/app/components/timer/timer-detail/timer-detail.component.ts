import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  AfterViewInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-timer-detail',
  templateUrl: './timer-detail.component.html',
  styleUrls: ['./timer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('timer', { static: true })
  timer!: CdTimerComponent;
  @Input() startShown: boolean = true;
  @Input() startTime: number = 3 * 60; // 3 minutes
  @Input() speakerName?: string;
  @Output() messageEvent = new EventEmitter<string>();
  messageState: string | undefined;
  autoStart = this.shouldAutoStart();
  endTime: number = 0;

  // State management
  canStart: boolean = true;
  canStop: boolean = false;
  canResume: boolean = false;
  canReset: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Ensures timer initializes showing the time without continueing the timer
    if (this.shouldAutoStart()) {
      this.stop();
      this.reset();
    }
  }

  // Events
  OnStart(component: CdTimerComponent) {}
  OnTick(timeInterface: TimeInterface) {}
  OnStop(component: CdTimerComponent) {}
  OnComplete(component: CdTimerComponent) {}
  sendMessage() {
    this.messageEvent.emit(this.messageState)
  }
  // Methods
  start(): void {
    this.timer.start();
    this.canStart = false;
    this.canStop = true;
    this.canReset = true;
    this.canResume = false;
  }

  stop(): void {
    this.timer.stop();
    this.canResume = true;
    this.canStop = false;
  }

  resume(): void {
    this.timer.resume();
  }

  reset(): void {
    this.timer.reset();
    this.canStart = true;
    this.canStop = false;
    this.canResume = false;
    this.canReset = false;
  }

  private shouldAutoStart(): boolean {
    if (this.startShown) {
      return true;
    }
    return false;
  }
}
