import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { SampleService } from 'src/app/services/sample.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserlabService } from 'src/app/services/userlab.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  patients: any[];
  samples: any[];
  userlabs: any[];
  createForm: FormGroup;
  constructor(
    private patientService: PatientService,
    private sampleService: SampleService,
    private userlabService: UserlabService
  ) {}

  ngOnInit(): void {
    this.patientService.getAll().subscribe({
      next: (res) => {
        this.patients = res;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
    // this.sampleService.getAll().subscribe({
    //   next: (res) => {
    //     this.patients = res;
    //   },
    //   error: (e) => {
    //     console.error(e);
    //   },
    //   complete: () => {},
    // });
    this.userlabService.getAll().subscribe({
      next: (res) => {
        this.userlabs = res;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {},
    });
    this.createForm = new FormGroup({
      type: new FormControl('', Validators.required),
      IdUserLab: new FormControl('', Validators.required),
      IdAnalysisType: new FormControl('', Validators.required),
      IdPatient: new FormControl('', Validators.required),
      IdSample: new FormControl('', Validators.required),
    });
  }
}
