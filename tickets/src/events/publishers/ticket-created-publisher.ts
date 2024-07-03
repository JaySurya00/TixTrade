import { Publisher, Subjects, TicketCreatedEvent } from '@jaysuryaraj00/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
