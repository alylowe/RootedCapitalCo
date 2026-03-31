const { calculateLaborTotal, LABOR_RATES, runAuditCheck } = require('../../packages/logic/index.js');
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Rooted Capital Co. | Secure Payroll Entry ---");

readline.question('Foreman Hours: ', (fHrs) => {
  const fAudit = runAuditCheck(parseFloat(fHrs));
  if (fAudit.flag) console.log("\x1b[31m%s\x1b[0m", fAudit.message);

  readline.question('Laborer Hours: ', (lHrs) => {
    const lAudit = runAuditCheck(parseFloat(lHrs));
    if (lAudit.flag) console.log("\x1b[31m%s\x1b[0m", lAudit.message);

    const total = calculateLaborTotal(parseFloat(fHrs), parseFloat(lHrs));
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Foreman: ${fHrs}h, Laborer: ${lHrs}h | Total: $${total}\n`;

    // Save to immutable log
    fs.appendFileSync('payroll.log', logEntry);

    console.log(`\n[AUDIT] Foreman Rate: $${LABOR_RATES.FOREMAN}/hr`);
    console.log(`[AUDIT] Laborer Rate: $${LABOR_RATES.LABORER}/hr`);
    console.log(`[SUCCESS] Total Labor Cost: $${total}`);
    console.log(`[SYSTEM] Entry saved to payroll.log`);
    
    readline.close();
  });
});
