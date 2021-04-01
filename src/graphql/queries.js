/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      IdentificationNumber
      SeatNumber
      ContactNumber
      Attendance
      Timedmitted
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        IdentificationNumber
        SeatNumber
        ContactNumber
        Attendance
        Timedmitted
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
