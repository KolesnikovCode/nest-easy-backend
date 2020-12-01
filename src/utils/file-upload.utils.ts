import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// Allow only png images
export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(png)$/)) {
    return callback(
      new HttpException(
        'Only .png files are allowed!',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  const name = file.originalname.split('.')[0];
  const dateString = Date.now().toString();

  callback(null, `${dateString}${name}.png`);
};