import { Body, Controller, Post } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { CreateNoteDto } from "./dto/create-note.dto";

@Controller("notes")
export class NotesController {
  constructor(private notes: NotesService) {}

  @Post()
  createNewNote(@Body() createNoteDto: CreateNoteDto) {
    return this.notes.create(createNoteDto);
  }
}
