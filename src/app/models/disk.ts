import { IShape } from './ishape';

export class Disk implements IShape {
  constructor(private radius: number) {}

  Perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  Area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
