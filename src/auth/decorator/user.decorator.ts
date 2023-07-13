import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((key: string, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;

  return key ? user?.[key] : user;

  // if (key != null) {
  //   return user?.[key];
  // } else return user;
});
