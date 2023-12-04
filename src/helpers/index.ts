import {HttpStatus } from '@nestjs/common';

export const handleResponse = (
  statusCode: number = 200,
  message: string = '',
  data = null
) => {
  let error = '';
  if (statusCode == HttpStatus.NOT_FOUND) {
    error = 'Not Found';
  }
  // if (!message && code == HttpStatus.FORBIDDEN) {
  //   message = 'Forbidden';
  // }

  return {
    message: message ?  [ message ] : [ "succesfully" ],
    statusCode,
    ...(error ? { error } : {}),
    ...(data ? { data } : {}),
  };
};

export interface Result {
  statusCode: number
  error?: string
  message: string[]
  data?: any
}