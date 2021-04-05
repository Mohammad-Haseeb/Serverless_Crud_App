// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunaDB=require("faunadb"),
q=faunaDB.query;
const handler = async (event) => {
  let data=JSON.parse(event.body).message;
  console.log("Data : ",);
  var adminClient = new faunaDB.Client({ secret: "fnAEGBiJwxACAZHLBKsITPnb59vdBK3ubXsaMxnl" });

  try {
    const subject = event.queryStringParameters.name || 'World'
    var result= await adminClient.query(
              q.Delete(
                q.Ref(q.Collection('data'),data.toString()),
               
              )
          );
          console.log('result',result)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
