// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunaDB=require("faunadb"),
q=faunaDB.query;

const handler = async (event) => {
  var adminClient = new faunaDB.Client({ secret: "fnAEGBiJwxACAZHLBKsITPnb59vdBK3ubXsaMxnl" });
  

  let comingData=JSON.parse(event.body);

  console.log("Upcoming data", comingData);
  try {
          var result= await adminClient.query(
          q.Update(
            q.Ref(q.Collection('data'),comingData.id.toString()),
            {data:{name:comingData.data}}
          )
      );
      consoloe.log("final Update Check", result);
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
