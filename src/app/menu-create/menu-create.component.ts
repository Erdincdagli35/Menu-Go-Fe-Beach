import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MenuService } from '../service/menu-service';
import { Router } from '@angular/router';
import { BeachCategory } from '../model/beach-category';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit {

  form: FormGroup;
  submitting = false;

  categories: string[] = [];
  filteredCategories: string[] = [];
  dropdownOpen = false;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) {
    this.form = this.fb.group({
      price: [0, [Validators.required, Validators.min(0)]],
      beachCategory: ['', Validators.required],
      translations: this.fb.array([
        this.createTranslation('TR'),
        this.createTranslation('EN')
      ])
    });
  }

  ngOnInit(): void {
    this.loadCategoriesFromEnum();
    this.filteredCategories = [...this.categories];
  }

  private loadCategoriesFromEnum(): void {
    const vals = Object.values(BeachCategory).filter(v => typeof v === 'string') as string[];
    this.categories = vals;
  }

  createTranslation(lang: string): FormGroup {
    return this.fb.group({
      lang: [lang],
      name: ['', Validators.required],
      description: ['']
    });
  }

  get translations(): FormArray {
    return this.form.get('translations') as FormArray;
  }

  get price() { return this.form.get('price'); }
  get beachCategory() { return this.form.get('beachCategory'); }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.closest('.dropdown')) return;
    this.dropdownOpen = false;
  }

  selectCategory(beachCategory: string): void {
    this.form.get('beachCategory')?.setValue(beachCategory);
    this.dropdownOpen = false;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.menuService.create(this.form.value).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['admin/product-control']);
      },
      error: err => {
        this.submitting = false;
        alert('Oluşturma hatası: ' + (err.message || err));
      }
    });
  }

  cancel(): void {
    this.router.navigate(['admin/product-control']);
  }
}