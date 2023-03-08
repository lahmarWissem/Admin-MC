import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateLanguagesDTO } from './dto/create-languages.dto';
import { UpdateLanguaesDTO } from './dto/update-laguages.dto';

import { LanguagesService } from './languages.service';
import { Languages } from './schemas/languages.schema';

@Controller('languages')
export class LanguagesController {

    constructor(private readonly languagesService: LanguagesService) { }
    @Post()
    async create(@Body() languagesData: Languages): Promise<Languages> {
        return this.languagesService.create(languagesData);
    }

    @Get()
    async findAll(): Promise<Languages[]> {
        return this.languagesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Languages> {
        return this.languagesService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body('language') language: string[],
        @Body('level') level: string[],
        @Body('certificate') certificate: string[],
    ): Promise<Languages> {
        return this.languagesService.update(id, language, level, certificate);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<Languages> {
        return this.languagesService.remove(id);
    }


}