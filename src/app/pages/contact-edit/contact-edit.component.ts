import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  onSaveContact(editForm: NgForm) {
    console.log("ContactEditComponent -> onSaveContact -> editForm", editForm.value)
    this.contactService.saveContact(editForm.value)
    this.router.navigateByUrl('/contact')
  }

}
