import { HttpCode, HttpStatus } from '@nestjs/common';

export const handleResponse = (code: number = 200, message: string = '') => {

  if (!message && code == HttpStatus.NOT_FOUND) {
    message = 'Not Found';
  }
  if (!message && code == HttpStatus.FORBIDDEN) {
    message = 'Forbidden';
  }

  return {
    code,
    message,
  };
};
