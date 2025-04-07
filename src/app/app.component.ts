import { Component } from '@angular/core';
import { CalculationService } from './services/calculation.service';
import { ShapeFormComponent } from './components/shape-form/shape-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ShapeFormComponent, CommonModule]
})
export class AppComponent {
  public shapes: any[] = [];

  constructor(public calculationService: CalculationService) {}

  onShapeDataReceived(shape: any) {
    this.shapes.push(shape);
  }

  calculateResults() {
    this.shapes.forEach(shape => {
      console.log('Area:', this.calculationService.calculateShapeArea(shape));
      console.log('Perimeter:', this.calculationService.calculateShapePerimeter(shape));
    });
  }
}
