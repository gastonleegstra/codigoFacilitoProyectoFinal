import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marketname'
})
export class MarketnamePipe implements PipeTransform {
  markets = [
      {id:'amazon_price', name: 'Amazon'},
      {id:'cardmarket_price', name: 'Cardmarket'},
      {id:'coolstuffinc_price', name:'Coolstuff Inc'},
      {id:'ebay_price', name:'Ebay'},
      {id:'tcgplayer_price', name:'TCG Player'}
  ];
  transform(value: string): string {
    const market = this.markets.find(m=> m.id === value);
    return market?.name || '';
  }
}
