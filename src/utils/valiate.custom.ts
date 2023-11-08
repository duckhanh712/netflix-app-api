import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsString,
  IsDateString,
  Matches
} from "class-validator"

export const IsCustomRegexMatch = (regex: RegExp, errorMessage?: string) => {
  return function (object: Object, propertyName: string) {
    IsString({ message: errorMessage })(object, propertyName);
    Matches(regex, { message: errorMessage })(object, propertyName);
  };
}