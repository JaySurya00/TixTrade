import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jaysuryaraj00/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
