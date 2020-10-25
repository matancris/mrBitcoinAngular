import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact
  @Output() removeContact = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {

  }
  onRemoveContact(ev, id) {
    console.log("ContactPreviewComponent -> onRemoveContact -> id", id)
    ev.preventDefault()
    ev.stopPropagation()
    this.removeContact.emit({event: ev, id })
  }
}
