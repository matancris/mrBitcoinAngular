import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  coinValue: Number;
 
  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinRate()
  }

  public get user(): User {
    return this.userService.getUser()
  }


  public async bitcoinRate(): Promise<void> {
    const currRate = await this.bitcoinService.getRate()
    console.log("HomePageComponent -> currRate", currRate)
    this.coinValue = currRate;
  }
}
