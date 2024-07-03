import { Publisher, Subjects, TicketUpdatedEvent } from '@jaysuryaraj00/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
