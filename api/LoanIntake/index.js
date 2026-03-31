const { runLoanRiskAudit } = require('../../packages/logic/index.js');

module.exports = async function (context, req) {
    const { clientName, amount, loanType, address } = req.body;
    
    // Architect Audit: Check for HNW Exposure
    const risk = runLoanRiskAudit(parseFloat(amount));
    
    const responseMessage = {
        status: "Accepted",
        client: clientName,
        auditResult: risk.flag ? risk.message : "Standard Risk Profile",
        timestamp: new Date().toISOString()
    };

    context.res = {
        status: 200,
        body: responseMessage
    };
    
    // Architect Note: This is where we trigger SendGrid to Mauny's email
    console.log(`[INTAKE] New ${loanType} application for $${amount} at ${address}`);
};
