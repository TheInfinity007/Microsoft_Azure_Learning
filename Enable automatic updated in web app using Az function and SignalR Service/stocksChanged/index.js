module.exports = async function (context, documents) {
    
  const updates = documents.map((stock) => ({
    target: "updated",
    arguments: [stock],
  }));

  context.log("stocksChanged CosmosDB Trigger", JSON.stringify(updates));

  context.bindings.signalRMessages = updates;
  context.done();
};
