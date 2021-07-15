import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToKeys'
})
export class ObjectToKeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
    }
    return Object.keys(value);
  }
}
