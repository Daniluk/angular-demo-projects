import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currency'
})
export class CurrencyProxyPipe implements PipeTransform {
    currencyPipe = new CurrencyPipe('en');

    transform(value, code = 'EUR', display = 'symbol', digites = '0.3-5', local = 'en') {
        return this.currencyPipe.transform(value, code, display, digites, local);
    }

}
