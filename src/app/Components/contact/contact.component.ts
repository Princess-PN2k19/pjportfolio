import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  load = false
  constructor(
    private fb: FormBuilder,
  ) { }

  sendEmail(data) {
    console.log(data)
    this.load = true
    emailjs.send('gmail', 'template_LndAAiWq', {
      reply_to: data.email,
      from_name: data.name,
      to_name: "ssecnirpyoj11@gmail.com",
      message_html: data.message
    }, 'user_yazvhmsT6YVuhNYNsiahW')
      .then((res) => {
        this.load = false
        this.contactForm.reset()
      }, (error) => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

}
