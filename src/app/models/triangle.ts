import { IShape } from './ishape';

export class Triangle implements IShape {
  constructor(
    private sideA: number,
    private sideB: number,
    private sideC: number
  ) {}

  Perimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  Area(): number {
    const s = this.Perimeter() / 2;
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }
}
