const { runLoanRiskAudit } = require('../../packages/logic/index.js');

module.exports = async function (context, req) {
    // Security Check: Ensure the requester has the key
    const headerKey = req.headers['x-functions-key'];
    const masterKey = process.env.AZURE_FUNCTION_KEY;

    if (headerKey !== masterKey) {
        context.res = { status: 401, body: "Unauthorized: Invalid Infrastructure Key" };
        return;
    }

    const { clientName, amount, address } = req.body;
    const risk = runLoanRiskAudit(parseFloat(amount));

    context.res = {
        status: 200,
        body: {
            message: "Lead Secured",
            founderReview: risk.flag,
            auditTrail: risk.message
        }
    };
    
    console.log(`[FREE-TIER-LOG] Lead captured for ${clientName} at ${address}`);
};
