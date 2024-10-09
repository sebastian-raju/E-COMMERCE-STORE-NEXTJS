import { gql } from "@apollo/client";


export const GET_TEST_EXAMPLE = gql`
query Test($testId: Int!) {
  test(id: $testId) {
    exampleField
  }
}
`