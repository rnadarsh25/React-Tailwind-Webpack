import { defaultFieldResolver } from 'graphql';
import { MapperKind, getDirective, mapSchema } from '@graphql-tools/utils';
const authenticateDirectiveTransformer = (schema, directive) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authenticateDirective = getDirective(
        schema,
        fieldConfig,
        directive
      );
      if (authenticateDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async (parent, args, context, info) => {
          const { user } = context;
          if (!user) throw new Error('User is not Authenticated!');
          const result = await resolve(parent, args, context, info);
          return result;
        };
      }
    },
  });
};

export default authenticateDirectiveTransformer;
