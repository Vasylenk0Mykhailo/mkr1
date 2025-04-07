import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Triangle } from 'src/app/models/triangle';
import { Disk } from 'src/app/models/disk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shape-form',
  templateUrl: './shape-form.component.html',
  styleUrls: ['./shape-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ShapeFormComponent {
  @Output() shapeData = new EventEmitter<Triangle | Disk>();

  shapeForm!: FormGroup;
  shapeType: string = 'triangle';
  perimeter: number | null = null;
  area: number | null = null;
  quantity: number = 1;  

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.shapeForm = this.fb.group({
      shapeType: ['triangle', Validators.required],
      sideA: [null],
      sideB: [null],
      sideC: [null],
      radius: [null],
      quantity: [1, [Validators.min(1)]], 
    });

    this.shapeForm.get('shapeType')?.valueChanges.subscribe((type) => {
      this.updateValidators(type);
    });

    this.updateValidators(this.shapeType);
  }

  updateValidators(type: string) {
    this.shapeType = type;

    if (type === 'triangle') {
      this.shapeForm.get('sideA')?.setValidators([Validators.required]);
      this.shapeForm.get('sideB')?.setValidators([Validators.required]);
      this.shapeForm.get('sideC')?.setValidators([Validators.required]);
      this.shapeForm.get('radius')?.clearValidators();
    } else {
      this.shapeForm.get('radius')?.setValidators([Validators.required]);
      this.shapeForm.get('sideA')?.clearValidators();
      this.shapeForm.get('sideB')?.clearValidators();
      this.shapeForm.get('sideC')?.clearValidators();
    }

    this.shapeForm.get('sideA')?.updateValueAndValidity();
    this.shapeForm.get('sideB')?.updateValueAndValidity();
    this.shapeForm.get('sideC')?.updateValueAndValidity();
    this.shapeForm.get('radius')?.updateValueAndValidity();
  }

  calculate() {
    if (this.shapeForm.invalid) return;

    const quantity = this.shapeForm.get('quantity')?.value || 1;
    this.quantity = quantity; 

    if (this.shapeType === 'triangle') {
      const { sideA, sideB, sideC } = this.shapeForm.value;
      const triangle = new Triangle(+sideA, +sideB, +sideC);
      this.perimeter = triangle.Perimeter();
      this.area = triangle.Area();
      this.shapeData.emit(triangle);
    } else {
      const { radius } = this.shapeForm.value;
      const disk = new Disk(+radius);
      this.perimeter = disk.Perimeter();
      this.area = disk.Area();
      this.shapeData.emit(disk);
    }
  }
}
