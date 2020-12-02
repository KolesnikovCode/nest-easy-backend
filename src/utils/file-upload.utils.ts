import { HttpException, HttpStatus } from '@nestjs/common';

// Allow only png images
export const imageFileFilter = (_, file, callback) => {
  if (!file.originalname.match(/\.(png)$/)) {
    return callback(
      new HttpException('Only .png files are allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (_, file, callback) => {
  const dateString = Date.now().toString();

  callback(null, `${dateString}.png`);
};
