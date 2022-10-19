import { Injectable } from '@angular/core';
import { IFlowCycle } from 'src/app/models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public currentFlowCycle = 0;

  // Current turn
  public flowcycles: IFlowCycle[] = [
    { name: '4n', timeSeconds:0, cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Simo', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Seviah', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Spiritman', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Numbpapaya', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Intelligencer', timeSeconds: 0 , cycleNumber: 0 , totalTimeSeconds: 180},
  ];



  constructor() { }
}
