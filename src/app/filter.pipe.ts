import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [filterKey, filterValue, filterCondition] = [...args];
    switch (filterCondition) {
      case ('>'): {
        value = value.filter((user) => user[filterKey] > filterValue);
        break;
      }
      case ('<'): {
        value = value.filter((user) => user[filterKey] < filterValue);
        break;
      }
      case ('='): {
        value = value.filter((user) => user[filterKey] === filterValue);
        break;
      }
      case ('>='): {
        value = value.filter((user) => user[filterKey] >= filterValue);
        break;
      }
      case ('<='): {
        value = value.filter((user) => user[filterKey] <= filterValue);
        break;
      }
    }
    return value;
  }

}
