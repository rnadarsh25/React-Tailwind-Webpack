import { MapperKind, getDirective, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver } from 'graphql';

const authorizeDirectiveTransformer = (schema, directive) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authorizeDirective = getDirective(schema, fieldConfig, directive);
      if (authorizeDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolver = async (parent, args, context, info) => {
          const { userRole } = context;
          const { roles } = authorizeDirective[0];
          if (!roles.includes(userRole))
            throw new Error(
              'User is not authorized to perform this operation!'
            );
          const result = await resolve(parent, args, context, info);
          return result;
        };
      }
    },
  });
};

export default authorizeDirectiveTransformer;
