import { registerDecorator, buildMessage, IsArray } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export interface ArrayLengthValidationOptions {
  depth?: number;
  length: number;
}

export function ArrayLength(validationOptions: ArrayLengthValidationOptions) {
  const arrayDepth = parseInt(validationOptions?.depth as any) ?? 1;
  const arrayLength = parseInt(validationOptions?.length as any);

  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ArrayLength',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {},
      validator: {
        validate(value: any, args: ValidationArguments) {
          function recursion(value: any, currentDepth: number) {
            if (arrayDepth === currentDepth) {
              return Array.isArray(value) && value.length === arrayLength;
            } else if (currentDepth > 0) {
              if (Array.isArray(value)) {
                return value.every((e) => recursion(e, currentDepth + 1));
              } else {
                return false;
              }
            } else {
              return true;
            }
          }

          return recursion(value, 1);
        },
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            `$property${'[]'.repeat(
              arrayDepth - 1,
            )} must be of length ${arrayLength}.`,
        ),
      },
    });
  };
}
