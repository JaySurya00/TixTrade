import { Subjects, Publisher, OrderCancelledEvent } from '@jaysuryaraj00/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
