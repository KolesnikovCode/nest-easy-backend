import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFiles,
  Res,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../utils/file-upload.utils';

@Controller('files')
export class FilesController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Post('uploadMultipleFiles')
  @UseInterceptors(
    FilesInterceptor('images', 6, {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];

    console.log('files', files);

    files.forEach((file) => {
      response.push(file.filename);
    });

    return {
      status: HttpStatus.OK,
      message: 'Images uploaded successfully!',
      data: response,
    };
  }

  @Get(':imagename')
  getImage(@Param('imagename') image, @Res() res) {
    const response = res.sendFile(image, { root: './uploads' });

    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
