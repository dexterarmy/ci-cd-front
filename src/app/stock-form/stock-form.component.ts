import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StockServiceService } from '../services/stock-service/stock-service.service';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stockForm: FormGroup;
  @Output() myEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private stockService: StockServiceService){}

  ngOnInit(){
    this.stockForm = this.formBuilder.group({
      stock : ['', Validators.required],
      entryType : ['', Validators.required],
      entryPrice : ['', Validators.required],
      stopLoss : ['', Validators.required],
      targetPoint : ['', Validators.required],
      quantity : ['', Validators.required],
      tag : ['', Validators.required],
      autoSquare : ['', Validators.required],
      


    })
  }

  stockSubmit(){
    console.log(this.stockForm.value);
    this.stockService.submitStockData(this.stockForm.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    })
    this.stockForm.reset();
    this.myEvent.emit();
  }


}
