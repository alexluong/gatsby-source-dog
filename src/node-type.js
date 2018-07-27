import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
} from "gatsby/graphql"

function fluidNodeType({ name }) {
  return {
    type: new GraphQLObjectType({
      name,
      fields: {
        base64: { type: GraphQLString },
        tracedSVG: { type: GraphQLString },
        aspectRatio: { type: GraphQLFloat },
        src: { type: GraphQLString },
        srcSet: { type: GraphQLString },
        srcWebp: { type: GraphQLString },
        srcSetWebp: { type: GraphQLString },
        sizes: { type: GraphQLString },
      },
    }),
    args: {
      maxWidth: {
        type: GraphQLInt,
        defaultValue: 800,
      },
      maxHeight: {
        type: GraphQLInt,
        defaultValue: 50,
      },
      quality: {
        type: GraphQLInt,
      },
      sizeByPixelDensity: {
        type: GraphQLBoolean,
        defaultValue: false,
      },
    },
    resolve: function(source) {
      return `Id of this node is ${source.id}`
    },
  }
}

export { fluidNodeType }
