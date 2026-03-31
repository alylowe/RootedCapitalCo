const LABOR_RATES = { FOREMAN: 50, LABORER: 25 };
const MAX_STANDARD_HOURS = 60;

/**
 * Audit: Labor & Payroll
 */
function calculateLaborTotal(f, l) {
    return (f * LABOR_RATES.FOREMAN) + (l * LABOR_RATES.LABORER);
}

function runAuditCheck(hours) {
    return hours > MAX_STANDARD_HOURS 
        ? { flag: true, message: "FOUNDER REVIEW REQUIRED: Labor hours exceed safety threshold." } 
        : { flag: false };
}

/**
 * Analytics: Distressed Property Acquisitions
 */
function calculateCapRate(noi, price) {
    if (price <= 0) return 0;
    return ((noi / price) * 100).toFixed(2);
}

module.exports = { LABOR_RATES, calculateLaborTotal, runAuditCheck, calculateCapRate };

/**
 * Georgia Realtor Commission Logic
 * Calculates split based on standard 6% total (3% per side)
 */
function calculateCommission(salePrice, splitPercentage = 0.03) {
    const gross = salePrice * splitPercentage;
    const brokerageFee = gross * 0.20; // Assuming a 80/20 split with your broker
    return {
        gross: gross.toFixed(2),
        net: (gross - brokerageFee).toFixed(2)
    };
}

module.exports = { ...module.exports, calculateCommission };
