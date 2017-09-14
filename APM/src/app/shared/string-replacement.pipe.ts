import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringReplacement'
})
export class StringReplacementPipe implements PipeTransform {
  transform(value: string, searchValue: string, replaceValue, string) {
    return value.replace(searchValue, replaceValue);
  }
}
