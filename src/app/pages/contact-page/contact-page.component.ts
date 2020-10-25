import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {


  contacts: Contact[];
  selectedContact: Contact;
  subscription: Subscription

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.loadContacts()
    this.subscription = this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts
      console.log("ContactPageComponent -> ngOnInit -> this.contacts", this.contacts)
    })
  }

  onFilterHandler(filterBy) {
    this.contactService.loadContacts(filterBy)
  }

  removeContact($event) {
    this.contactService.deleteContact($event.id)
  }


}
