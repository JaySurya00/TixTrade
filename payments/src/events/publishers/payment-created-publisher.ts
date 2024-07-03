import { Subjects, Publisher, PaymentCreatedEvent } from '@jaysuryaraj00/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
