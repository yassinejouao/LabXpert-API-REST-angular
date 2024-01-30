import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Fournisseur } from 'src/app/models/fournisseur.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  currentFournisseur: Fournisseur;
  updateForm: FormGroup;
  viewMode: boolean;
  loading = false;
  constructor(
    private fournisseurService: FournisseurService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  // on init
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.viewMode = queryParams['viewMode'] === 'true';
    });
    this.fournisseurService
      .getById(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.currentFournisseur = data;
          this.updateForm = new FormGroup({
            id: new FormControl(this.currentFournisseur.id),
            name: new FormControl(
              { value: this.currentFournisseur.name, disabled: this.viewMode },
              Validators.required
            ),
            status: new FormControl(
              { value: this.currentFournisseur.status, disabled: this.viewMode },
              Validators.required
            ),
          });
          console.log(data);
        },
        error: (e) => console.error(e),
      });
  }
  // to update form
  onSubmit(): void {
    if (this.updateForm.valid) {
      this.loading = true;
      const data = this.updateForm.value;
      this.fournisseurService.update(this.currentFournisseur.id, data).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/fournisseur/index']);
        },
        error: (e) => {
          console.error(e);
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
