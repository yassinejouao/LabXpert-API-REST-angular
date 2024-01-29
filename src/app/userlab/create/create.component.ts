import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  constructor() {}

  // on init
  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      option: new FormControl('', Validators.required),
      selectone: new FormControl('', Validators.required),
    });
  }
  // to submit form
  onSubmit() {
    if (this.createForm.valid) {
      console.log(this.createForm.value);
    }
  }
}
