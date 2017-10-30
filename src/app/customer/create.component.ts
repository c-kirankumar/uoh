import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/Forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  uboForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.uboForm = fb.group({
      entityName: ['', Validators.required],
      EIN: ['', Validators.required],
      ClassificationCode: ['', Validators.required],
      formationZIPCode: ['', Validators.required],
      bussinessZIPCode: ['', Validators.required],
      bussinessCountryCode: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

}
