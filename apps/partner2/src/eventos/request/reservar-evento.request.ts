import { TicketKind } from '@prisma/client';

export class ReservarEventoRequest {
    spots: string[];
    ticket_kind: TicketKind;
    email: string;
}
