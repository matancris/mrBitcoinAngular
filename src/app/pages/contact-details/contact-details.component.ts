import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  @Input() 

  contact: Contact
  constructor(private location: Location , private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    console.log(this.contact);
      this.route.paramMap.subscribe(params => {
      const id = params.get('id')
      this.contactService.getContactById(id)
      .subscribe(contact => this.contact = contact)
    })
  }

  onBack() {
    this.location.back()
  }
  
}
