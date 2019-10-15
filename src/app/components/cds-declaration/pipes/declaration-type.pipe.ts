import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'declarationtypetrimmer'
})
export class DeclarationTypeTrimmer implements PipeTransform {
  transform(value: string, args?: any): any {
    return value.substring(0, 3);
  }
}

@Pipe({ name: 'startsWith' })
export class AutocompletePipeStartsWith implements PipeTransform {
  public transform(collection: any[], term = '') {
    return collection.filter(item =>
      item
        .toString()
        .toLowerCase()
        .startsWith(term.toString().toLowerCase())
    );
  }
}
