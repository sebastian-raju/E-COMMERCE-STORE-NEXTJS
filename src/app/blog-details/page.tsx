import client from "@/network/graphql/client"
import { BlogList, GET_BLOG_LISTS } from "@/network/graphql/mutations/getBlogList"



export default async function blog_details() {

  const blogList: BlogList = {
    blogIds: [],
    branchIds:["667667fe75a4573243c0b644"],
    limit: 1,
    paths: [],
    searchingText: "",
    skip: 0,
    sortOrder: -1,
    sortType: 0,
    statusArray: [1],
    tagIds: []
  }

  try {

    const { data } = await client.mutate({
      mutation:GET_BLOG_LISTS,
      variables: { blogList }
    })

    console.log(data?.Blog_List);

    return <div></div>
  } catch (error) {
    console.log(error);
    return <div></div> 
  }
}