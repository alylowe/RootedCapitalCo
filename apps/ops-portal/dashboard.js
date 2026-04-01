const { PRODUCTS } = require('../../packages/logic/index.js');

console.log("\n==========================================");
console.log("   ROOTED CAPITAL CO. | LENDING OPS      ");
console.log("   MAUNY TABAR - PRINCIPAL DIRECT LENDER ");
console.log("==========================================");

console.log("ACTIVE PRODUCT GUIDES:");
console.log(`- Fix & Flip: Up to ${PRODUCTS.FIX_FLIP.maxLTC * 100}% LTC`);
console.log(`- Rental: Min FICO ${PRODUCTS.RENTAL_SINGLE.minFICO}`);

console.log("\nCOMPLIANCE ALERT:");
console.log("Ineligible States: ND, OR, SD, UT, VT");

console.log("------------------------------------------");
console.log("PIPELINE STATUS: Scaling to 45 States & DC");
console.log("==========================================\n");
