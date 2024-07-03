import { Publisher, OrderCreatedEvent, Subjects } from '@jaysuryaraj00/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
