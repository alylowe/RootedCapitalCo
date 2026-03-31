const { calculateCapRate } = require('../../packages/logic/index.js');

console.log("\n==========================================");
console.log("   ROOTED CAPITAL CO. | PARTNER OVERVIEW  ");
console.log("   MAUNY TABAR & NEEMA TABAR - CONFIDENTIAL ");
console.log("==========================================");

// Corporate Portfolio Stats
const totalAUM = 1300000; 
const netOperatingIncome = 104000;

console.log(`Total AUM: $${totalAUM.toLocaleString()}`);
console.log(`Portfolio Yield: ${calculateCapRate(netOperatingIncome, totalAUM)}%`);
console.log("------------------------------------------");
console.log("OPERATIONAL STATUS: Audit Compliant");
console.log("LENDING ENGINE: Active");
console.log("==========================================\n");
