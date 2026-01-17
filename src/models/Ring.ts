// models/Ring.ts
import { Jewel } from "./Jewel.js";

export class Ring extends Jewel {
  getFinalPrice(): number {
    return this.price * 1.18; // impuesto
  }
}
