import client from "@/network/graphql/client";
import { GET_TEST_EXAMPLE } from "@/network/graphql/queries/getTestExample";


export default async function products() {


    const id = 1;
    const { data } = await client.query({
      query:GET_TEST_EXAMPLE,
      variables:{testId:id},
    })
    console.log(data)
    return <div>
      {data?.test?.__typename}
    </div>

}