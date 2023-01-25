import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Card } from 'src/app/interfaces/card.interface';
import { CardService } from 'src/app/services/card.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cardTextFC = new FormControl('');
  cards: Card[]=[];
  offset = 0
  constructor( private cardService : CardService) { }

  ngOnInit(): void {
    this.cardTextFC.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      res=>{
        console.log(res)
        this.cards=[]
        this.getCards(res)
      })
    this.getCards();
  }

  onScroll(){
    this.getCards();
    this.offset+=100;
  }

  getCards(cardName:string|null = null){
      return this.cardService.getCards(cardName,this.offset).subscribe(
        res=>{
            console.log(res)
            this.cards=[...this.cards,...res]

        });
  }
}
