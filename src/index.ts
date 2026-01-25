import { Ring } from "./models/Ring.js";
import { Jewel } from "./models/Jewel.js";


const inventory: Ring[] = [];

inventory.push(new Ring("Anillo de Oro", 150));
inventory.push(new Ring("Anillo de plata", 100));

console.log(`Inventario:`);
inventory.forEach((ring, index) => {
  console.log(`${index + 1}. ${ring.name} - Precio base: $${ring.price}, Precio final: $${ring.getFinalPrice()}`);
});
// ---------------------------------------------------------

function calculateTotal(
  items: Jewel[],
  index: number = 0
): number {
  if (index === items.length) return 0;
  return items[index].getFinalPrice() + calculateTotal(items, index + 1);
}
console.log("Total:", calculateTotal(inventory));
// ---------------------------------------------------------
async function loadInventory(): Promise<Jewel[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        new Ring("Anillo Plata", 80),
        new Ring("Anillo Oro", 150),
      ]);
    }, 1000);
  });
}

const data = await loadInventory();
//inventory.push(data[0]);
//inventory.push(data[1]);
console.log("Inventario cargado:", data);

//inventory.forEach((ring, index) => {
  //console.log(`${index + 1}. ${ring.name} - Precio base: $${ring.price}, Precio final: $${ring.getFinalPrice()}`);
//})
// ---------------------------------------------------------

function addJewel(jewel: Jewel) {
  if (jewel.price <= 0) {
    throw new Error("El precio debe ser mayor a 0");
  }
  inventory.push(jewel);
  console.log("The new Jewel was added successfully")
  inventory.forEach((ring, index) => {
  console.log(`${index + 1}. ${ring.name} - Precio base: $${ring.price}, Precio final: $${ring.getFinalPrice()}`);
});
}

try {
  addJewel(new Ring("Anillo inválido", -10));
} catch (error) {
  console.error("❌ Error:", (error as Error).message);
}

