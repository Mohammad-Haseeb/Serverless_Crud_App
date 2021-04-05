// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const faunaDB=require("faunadb"),
q=faunaDB.query;
const handler = async (event) => {
  var adminClient = new faunaDB.Client({ secret: "fnAEGBiJwxACAZHLBKsITPnb59vdBK3ubXsaMxnl" });

  try {
    var result =await adminClient.query(
                  q.Map(
                    q.Paginate(q.Documents(q.Collection("data"))),
                    q.Lambda("X", q.Get(q.Var("X")))
                  )
                );
                
                let finalData=result.data.map((data)=>{
                  return { id: data.ref.id,
                            Name:data.data.name

                  };
                })
              
  
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message:finalData  }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
