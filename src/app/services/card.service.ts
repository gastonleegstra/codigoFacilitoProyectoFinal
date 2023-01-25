import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  API_URL = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
  constructor(private http: HttpClient) { }

  getCards(name:string|null,offset:number=0){
    const params:any={
      num:100,
      offset
    }
    if (name) params.fname = name
    return this.http.get<Card[]>(this.API_URL,{params}).pipe(
      map(
        (res: any) => res.data
      )
    );
  }

  getCard(id:string){
    const params={
      id
    }
    return this.http.get<Card>(this.API_URL,{params}).pipe(
      map(
        (res:any) => res.data[0]
      )
    );}
}
