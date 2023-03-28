import { Component, OnInit, Input , EventEmitter} from '@angular/core';
import { StockServiceService } from '../services/stock-service/stock-service.service';

interface stockObject{
  stock: string,
  entryType: string,
  entryPrice: string,
  stopLoss: string,
  targetPoint: string,
  quantity: string,
  tag: string,
  autoSquare: string,

}

@Component({
  selector: 'app-stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.css']
})
export class StockTableComponent implements OnInit {
 
  @Input() myEvent : EventEmitter<any>;

  data:Array<stockObject>;

  constructor(private stockService: StockServiceService){}
  ngOnInit(): void {

    this.stockData();
    this.myEvent.subscribe(() => {
      this.stockData();
    })
    console.log(this.data);
    
  }

  stockData():object{
    return this.stockService.getStockData().subscribe({
      next: (res:any) =>{
         this.data = res.data;
         console.log(res)
      },
      error: (err) => console.error(err.message)
    })
  }
  

}
