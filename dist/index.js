import { Ring } from "./models/Ring.js";
const inventory = [];
inventory.push(new Ring("Anillo de Oro", 150));
inventory.push(new Ring("Anillo de plata", 100));
console.log(`Inventario:`);
inventory.forEach((ring, index) => {
    console.log(`${index + 1}. ${ring.name} - Precio base: $${ring.price}, Precio final: $${ring.getFinalPrice()}`);
});
// ---------------------------------------------------------
function calculateTotal(items, index = 0) {
    if (index === items.length)
        return 0;
    return items[index].getFinalPrice() + calculateTotal(items, index + 1);
}
console.log("Total:", calculateTotal(inventory));
// ---------------------------------------------------------
async function loadInventory() {
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
inventory.push(data[0]);
inventory.push(data[1]);
console.log("Inventario cargado:", data);
inventory.forEach((ring, index) => {
    console.log(`${index + 1}. ${ring.name} - Precio base: $${ring.price}, Precio final: $${ring.getFinalPrice()}`);
});
// ---------------------------------------------------------
