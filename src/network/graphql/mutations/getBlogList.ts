import { gql } from "@apollo/client";


export type BlogList = {
    blogIds: string[],
    branchIds:string[],
    limit: number,
    paths: string[],
    searchingText: string,
    skip: number,
    sortOrder: number,
    sortType: number,
    statusArray: number[],
    tagIds: string[]
}

export const GET_BLOG_LISTS = gql`
mutation Blog_List($blogList: ListBlogsInput!) {
  Blog_List(Blog_List: $blogList) {
    list {
      _likeCount
      _name
      _dislikeCount
    }
  }
}
`;


// _branchId
// _createdAt
// _content
// _nextPostId
// _path
// _postedAt
// _tagId