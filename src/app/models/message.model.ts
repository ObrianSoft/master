export enum MessageType {
  TimerTickMessage = 'TimerTickMessage',
}

export interface IGenericMessage {
  messageType: string;
}
