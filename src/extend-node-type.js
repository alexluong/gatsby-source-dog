import { GraphQLString } from "gatsby/graphql"

function setFieldsOnGraphQLNodeType({ type }) {
  if (type.name !== "DogImage") {
    return {}
  }

  return {
    newField: {
      type: GraphQLString,
      args: {
        myArgument: {
          type: GraphQLString,
        },
      },
      resolve: (source, fieldArgs) => {
        return `Id of this node is ${source.id}.
                Field was called with argument: ${fieldArgs.myArgument}`
      },
    },
  }
}

export default setFieldsOnGraphQLNodeType
