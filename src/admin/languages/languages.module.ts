import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';
import { LanguagesDataschema } from './schemas/languages.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Languages', schema: LanguagesDataschema }])],
  controllers: [LanguagesController],
  providers: [LanguagesService]
})
export class LanguagesModule {}
