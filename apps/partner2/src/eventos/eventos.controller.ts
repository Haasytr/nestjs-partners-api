import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { EventsService } from '../../../../libs/core/src/events/events.service';
import { CriarEventoRequest } from './request/criar-evento.request';
import { ReservarEventoRequest } from './request/reservar-evento.request';
import { AtualizarEventoRequest } from './request/atualizar-evento.request';

@Controller('eventos')
export class EventosController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  create(@Body() criarEventoRequest: CriarEventoRequest) {
    return this.eventsService.create(criarEventoRequest);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEventRequest: AtualizarEventoRequest,
  ) {
    return this.eventsService.update(id, updateEventRequest);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }

  @Post(':id/reserve')
  reserveSpots(
    @Body() reservarEventoRequest: ReservarEventoRequest,
    @Param('id') eventId: string,
  ) {
    return this.eventsService.reserveSpot({
      ...reservarEventoRequest,
      eventId,
    });
  }
}
