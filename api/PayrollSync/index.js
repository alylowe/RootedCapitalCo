module.exports = async function (context, req) {
    const data = req.body;
    context.bindings.tableBinding = {
        PartitionKey: "Payroll_Audit",
        RowKey: Date.now().toString(),
        Amount: data.amount,
        Status: "Verified",
        Approver: "Mauny"
    };
    context.res = { status: 200, body: "Payroll synchronized to secure audit log." };
};
