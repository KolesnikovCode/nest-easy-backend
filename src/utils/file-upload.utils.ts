import { HttpException, HttpStatus } from '@nestjs/common';

// Allow only png || jpeg images
export const imageFileFilter = (_, file, callback) => {
  if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
    return callback(
      new HttpException('Only png and jpeg files are allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (_, file, callback) => {
  const dateString = Date.now().toString();
  const originalSplitedFileName = file.originalname.split('.');
  const fileExtension = originalSplitedFileName[originalSplitedFileName.length - 1];
  const STANDART_EXTENTION = 'jpg';

  callback(null, `${dateString}.${fileExtension || STANDART_EXTENTION}`);
};
