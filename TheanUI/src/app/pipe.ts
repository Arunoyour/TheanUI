import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchOptions'
})
export class SearchOptionsPipe implements PipeTransform {
    transform(items: any[], filter: string): any {
        if (!items || !filter) {
            return items;
        }

        // This will search and match any option.value that contains the search term
        return items.filter(item => item.value.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
    }
}