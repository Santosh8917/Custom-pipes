import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sgpd'
})
export class SgpdPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[rate]=args;
    return value*rate;
  }

}
