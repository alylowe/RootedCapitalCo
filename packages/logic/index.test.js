const { LABOR_RATES, calculateLaborTotal } = require('./index.js');

console.log("--- RUNNING BUSINESS RULE AUDIT ---");

// Test 1: Rate Integrity
if (LABOR_RATES.FOREMAN === 50 && LABOR_RATES.LABORER === 25) {
    console.log("[PASS] Rates are locked at $50/$25.");
} else {
    console.error("[FAIL] RATES HAVE BEEN ALTERED!");
    process.exit(1);
}

// Test 2: Calculation Accuracy
if (calculateLaborTotal(10, 10) === 750) {
    console.log("[PASS] Calculation logic is accurate.");
} else {
    console.error("[FAIL] CALCULATION ERROR DETECTED!");
    process.exit(1);
}

console.log("--- AUDIT COMPLETE: SYSTEM INTEGRITY VERIFIED ---");
