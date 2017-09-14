import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'stringReplacement'
})
export class StringReplacementPipe implements PipeTransform {
  transform(value: string, searchValue: string, replaceValue: string) {
    return value.replace(searchValue, replaceValue);
  }
}

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  readonly stringReplacementPipe: StringReplacementPipe = new StringReplacementPipe();
  readonly replaceValue: string = ' ';

  transform(value: string, searchValue: string) {
    return this.stringReplacementPipe.transform(value, searchValue, this.replaceValue);
  }
}

@Pipe({
  name: 'convertDashesToSpaces'
})
export class ConvertDashesToSpacesPipe implements PipeTransform {
  readonly convertToSpacesPipe: ConvertToSpacesPipe = new ConvertToSpacesPipe();
  readonly searchValue: string = '-';

  transform(value: string) {
    return this.convertToSpacesPipe.transform(value, this.searchValue);
  }
}
