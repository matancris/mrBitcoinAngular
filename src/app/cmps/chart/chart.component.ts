import { Component, OnInit } from '@angular/core';
import { GoogleChartsConfig } from 'angular-google-charts/lib/models/google-charts-config.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  title: String;
  type = 'LineChart';
  data: any[][] = [];
  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 550;
  height = 400;

  constructor(private bitcoinService: BitcoinService) { }

  
  async ngOnInit(): Promise<void> {
    let marketPrice = await this.bitcoinService.getMarketPrice()
    let values = marketPrice['values']
    this.title = marketPrice['name']
    this.columnNames = Object.keys(values[0])
    for (let i = 0; i < values.length; i++) {
      this.data.push(Object.values(values[i]))
    }    
  }
}
