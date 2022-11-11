import { IGenericMessage } from './message.model';
export interface ITimerTickMessage extends IGenericMessage{
  seconds: number;
}
