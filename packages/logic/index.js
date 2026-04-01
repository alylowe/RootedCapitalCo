const LABOR_RATES = { FOREMAN: 50, LABORER: 25 };
const MAX_STANDARD_HOURS = 60;

/**
 * Institutional Lending Guardrails (White-Labeled)
 */
const PRODUCTS = {
    FIX_FLIP: { maxLTC: 0.90, maxARLTV: 0.70, minLoan: 50000, maxLoan: 3000000 },
    GROUND_UP: { maxLTC: 0.85, maxARV: 0.70, minLoan: 50000, maxLoan: 3000000 },
    STABILIZED_BRIDGE: { maxLTC: 0.85, maxLTV: 0.70, minFICO: 660 },
    RENTAL_SINGLE: { maxLTV: 0.80, minFICO: 660, minLoan: 75000 },
    RENTAL_PORTFOLIO: { maxLTV: 0.80, minFICO: 680, minVal: 72000 }
};

function calculateLaborTotal(f, l) { return (f * LABOR_RATES.FOREMAN) + (l * LABOR_RATES.LABORER); }

/**
 * Partner Risk Audit
 */
function validateLoanRequest(type, amount, fico) {
    const p = PRODUCTS[type];
    if (!p) return { valid: false, message: "Invalid Product Type" };
    if (fico < p.minFICO) return { valid: false, message: "FICO below institutional floor." };
    if (amount < p.minLoan) return { valid: false, message: "Amount below minimum threshold." };
    return { valid: true };
}

module.exports = { ...module.exports, PRODUCTS, validateLoanRequest };
