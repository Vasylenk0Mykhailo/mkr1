import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';
import { Triangle } from '../models/triangle';
import { Disk } from '../models/disk';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the area of a triangle correctly', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(service.calculateShapeArea(triangle)).toEqual(6);
  });

  it('should calculate the perimeter of a triangle correctly', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(service.calculateShapePerimeter(triangle)).toEqual(12);
  });

  it('should calculate the area of a disk correctly', () => {
    const disk = new Disk(7);
    expect(service.calculateShapeArea(disk)).toEqual(Math.PI * 49);
  });

  it('should calculate the perimeter of a disk correctly', () => {
    const disk = new Disk(7);
    expect(service.calculateShapePerimeter(disk)).toEqual(2 * Math.PI * 7);
  });
});
