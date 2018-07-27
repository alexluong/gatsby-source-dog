import { GraphQLBoolean } from "gatsby/graphql"
// import { fluidNodeType } from "./node-type"

function setFieldsOnGraphQLNodeType({ type }) {
  if (type.name !== "DogImage") {
    return {}
  }

  return {
    hasImageUrl: {
      type: GraphQLBoolean,
      resolve: () => true,
    },
  }
}

export default setFieldsOnGraphQLNodeType
