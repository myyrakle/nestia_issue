import { registerDecorator, buildMessage } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';

export interface ArrayValidationOptions {
  depth?: number;
  elementType: Function;
}

export function IsArrayOfType(validationOptions: ArrayValidationOptions) {
  const arrayDepth = parseInt(validationOptions?.depth as any) ?? 1;
  const elementType = validationOptions?.elementType;

  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isArrayOfType',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: {},
      validator: {
        validate(value: any, args: ValidationArguments) {
          function recursion(value: any, arrayDepth: number) {
            console.log(value, arrayDepth);
            if (arrayDepth > 0) {
              if (Array.isArray(value)) {
                return value.every((e) => recursion(e, arrayDepth - 1));
              } else {
                return false;
              }
            } else {
              if (elementType(value) === value) {
                return true;
              } else {
                return false;
              }
            }
          }

          return recursion(value, arrayDepth);
        },
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            `$property must be a ${arrayDepth}-dimensional array of [${elementType.name} type]`,
        ),
      },
    });
  };
}
