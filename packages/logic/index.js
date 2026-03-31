const LABOR_RATES = { FOREMAN: 50, LABORER: 25 };
const MAX_STANDARD_HOURS = 60;

/**
 * Core Payroll Logic
 */
function calculateLaborTotal(f, l) {
    return (f * LABOR_RATES.FOREMAN) + (l * LABOR_RATES.LABORER);
}

function runAuditCheck(hours) {
    return hours > MAX_STANDARD_HOURS 
        ? { flag: true, message: "WARNING: High Hours detected." } 
        : { flag: false };
}

/**
 * Investment Analytics for Distressed Properties
 * Cap Rate = (Net Operating Income / Purchase Price) * 100
 */
function calculateCapRate(noi, price) {
    if (price <= 0) return 0;
    return ((noi / price) * 100).toFixed(2);
}

module.exports = { LABOR_RATES, calculateLaborTotal, runAuditCheck, calculateCapRate };
