const fs = require('fs');
const { calculateCapRate } = require('../../packages/logic/index.js');

const logFile = 'payroll.log';
console.log("\n==========================================");
console.log("   ROOTED CAPITAL CO. | EXECUTIVE SUMMARY ");
console.log("==========================================");

if (fs.existsSync(logFile)) {
    const data = fs.readFileSync(logFile, 'utf8').trim().split('\n');
    let total = 0;
    data.forEach(line => {
        console.log(line);
        const match = line.match(/Total: \$(\d+)/);
        if (match) total += parseInt(match[1]);
    });
    console.log("------------------------------------------");
    console.log(`CONSOLIDATED LABOR SPEND: $${total}`);
}

// Quick Investment Calculator for the Founders
console.log("\n--- INVESTMENT QUICK-LOOK ---");
const demoCap = calculateCapRate(24000, 300000); // Example: k/mo NOI on 00k house
console.log(`Target Property Cap Rate: ${demoCap}%`);
console.log("==========================================\n");
