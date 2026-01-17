// models/Jewel.ts
export abstract class Jewel {
  constructor(
    public name: string,
    public price: number
  ) {}

  abstract getFinalPrice(): number;
}
