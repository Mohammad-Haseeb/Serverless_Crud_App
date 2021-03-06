// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunaDB=require("faunadb"),
q=faunaDB.query;

const handler = async (event) => {
  let data =JSON.parse(event.body);
  var adminClient = new faunaDB.Client({ secret: "fnAEGBiJwxACAZHLBKsITPnb59vdBK3ubXsaMxnl" });
  
  try {
    let result=await adminClient.query(
            q.Create(
                q.Collection("data"),
                {data:{name:data.Name
 
              }},
      
            )
      
        );


    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Done` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
