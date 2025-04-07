import { Injectable } from '@angular/core';
import { Triangle } from '../models/triangle';
import { Disk } from '../models/disk';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  calculateShapeArea(shape: any): number {
    return shape.Area();
  }

  calculateShapePerimeter(shape: any): number {
    return shape.Perimeter();
  }

  getShapesData() {
    return [
      { type: 'Triangle', params: { sideA: 3, sideB: 4, sideC: 5 } },
      { type: 'Disk', params: { radius: 7 } }
    ];
  }
}
