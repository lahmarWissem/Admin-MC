import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdressSettingModule } from './admin/adress-setting/adress-setting.module';
import { LanguagesModule } from './admin/languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    AdressSettingModule,
    LanguagesModule,
    MongooseModule.forRoot(process.env.DB_URI)

  ],
})    
export class AppModule { }


