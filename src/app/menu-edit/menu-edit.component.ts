import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../service/menu-service';
import { BeachCategory } from '../model/beach-category';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BeachMenu } from '../model/beach-menu';

@Component({
  selector: 'app-menu-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit {

  form: FormGroup;
  id!: number;
  submitting = false;
  
  beachCategory: string[] = [];
  filteredCategories: string[] = [];
  dropdownOpen = false;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router) 
    {
    this.form = this.fb.group({
      price: [0],
      beachCategory: [''],
      translations: this.fb.array([])   // 🔥 boş ama TANIMLI olmalı
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCategoriesFromEnum();

     this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.id) {
      alert('Geçersiz ürün id');
      this.router.navigate(['admin/product-control']);
      return;
    }

    this.menuService.getById(this.id).subscribe({
      next: (p: BeachMenu) => {
        this.form.patchValue(p);
      },
      error: err => {
        alert('Ürün bulunamadı veya yüklenemedi.');
        this.router.navigate(['admin/product-control']);
      }
    });

    this.getItem();
  }

  private loadCategoriesFromEnum(): void {
    const vals = Object.values(BeachCategory).filter(v => typeof v === 'string') as string[];
    this.beachCategory = vals;
    this.filteredCategories = [...this.beachCategory];
  }

  get translations(): FormArray {
    return this.form.get('translations') as FormArray;
  }

  get price() {
    return this.form.get('price') ;
  }
  
  createTranslation(t: any): FormGroup {
    return this.fb.group({
      id: [t.id],
      lang: [t.lang],
      name: [t.name, Validators.required],
      description: [t.description]
    });
  }

  getItem(): void {
    this.menuService.getById(this.id).subscribe(res => {

      this.form.patchValue({
        price: res.price,
        beachCategory: res.beachCategory
      });

      const formArray = this.translations;
      formArray.clear();

      if (res.translations && res.translations.length > 0) {
        res.translations.forEach(t => {
          formArray.push(this.createTranslation(t));
        });
      } else {
        // 🔥 fallback (boş gelirse UI boş kalmasın)
        formArray.push(this.createTranslation({ lang: 'TR', name: '', description: '' }));
        formArray.push(this.createTranslation({ lang: 'EN', name: '', description: '' }));
      }
    });
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
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

    const payload = {
      price: this.form.value.price,
      beachCategory: this.form.value.beachCategory,
      translations: this.form.value.translations
    };

    this.menuService.edit(this.id, payload).subscribe({
      next: () => {
        this.router.navigate(['admin/product-control']);
      },
      error: err => {
        this.submitting = false;
        alert('Güncelleme hatası: ' + (err.message || err));
      }
    });
  }

  cancel(): void {
    this.router.navigate(['admin/product-control']);
  }
}