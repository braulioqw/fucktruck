import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';

@Controller('uploads')
export class UploadsController {

  @Post('food')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/foods',

        filename: (req, file, cb) => {
          const uniqueName =
            Date.now() + '-' + file.originalname;

          cb(null, uniqueName);
        },
      }),
    }),
  )
  uploadFoodImage(
    @UploadedFile() file: Express.Multer.File,
  ) {
    return {
      message: 'Imagen subida correctamente',
      filename: file.filename,
      path: file.path,
    };
  }
}