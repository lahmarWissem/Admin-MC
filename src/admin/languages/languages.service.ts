import { UpdateLanguaesDTO } from './dto/update-laguages.dto';

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Languages } from './schemas/languages.schema';

@Injectable()
export class LanguagesService {

    constructor(
        @InjectModel(Languages.name) private LanguagesModel: Model<Languages>,
    ) { }

    async create(languagesData: Languages): Promise<Languages> {
        // Convert arrays to strings
        languagesData.language = languagesData.language.map(lang => lang.toString());
        languagesData.level = languagesData.level.map(lvl => lvl.toString());
        languagesData.certificate = languagesData.certificate.map(cert => cert.toString());

        const createdLanguages = new this.LanguagesModel(languagesData);
        return createdLanguages.save();
    }
    async findAll(): Promise<Languages[]> {
        return this.LanguagesModel.find().exec();
    }

    async findOne(id: string): Promise<Languages> {
        return this.LanguagesModel.findById(id).exec();
    }

    async update(id: string, languages: string[], levels: string[], certificates: string[]): Promise<Languages> {
        const updatedLanguages = await this.LanguagesModel.findByIdAndUpdate(
            id,
            {
                language: languages,
                level: levels,
                certificate: certificates,
            },
            { new: true },
        );
        return updatedLanguages;
    }

    async remove(id: string): Promise<Languages> {
        return this.LanguagesModel.findByIdAndRemove(id);
    }
}
