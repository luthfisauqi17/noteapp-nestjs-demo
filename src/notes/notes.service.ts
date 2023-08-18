import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class NotesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateNoteDto) {
    const note = this.prisma.note.create({
      data: {
        title: dto.title,
        body: dto.body,
      },
    });
    return note;
  }
}
