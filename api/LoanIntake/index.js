module.exports = async function (context, req) {
    const data = req.body;
    context.bindings.tableBinding = {
        PartitionKey: "Institutional_Leads",
        RowKey: Date.now().toString(),
        FullName: data.FullName,
        Email: data.Email,
        Capital: data.Capital,
        Location: data.Location,
        Summary: data.Summary
    };
    context.res = { status: 200, body: "Institutional audit lead captured." };
};
