import { NotFoundException } from '@nestjs/common';

export const handleNotFound = async (promise: Promise<any>) => {
  const item = await promise;
  if (!item) {
    throw new NotFoundException(`Item not found`);
  }
  return item;
};
