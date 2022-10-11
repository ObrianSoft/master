import { Injectable } from '@angular/core';
import { Speaker } from 'src/app/models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public speakers?: Speaker[] = [
    { name: '4n', timeSeconds: 3 * 60 },
    { name: 'Simo', timeSeconds: 3 * 60 },
    { name: 'Seviah', timeSeconds: 3 * 60 },
    { name: 'Spiritman', timeSeconds: 3 * 60 },
    { name: 'Numbpapaya', timeSeconds: 3 * 60 },
    { name: 'Intelligencer', timeSeconds: 3 * 60 },
  ];
  constructor() { }
}
