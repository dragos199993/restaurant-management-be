import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String, { description: 'Name of the restaurant' })
  title: string;
  @Field(() => String, { description: 'Description the restaurant' })
  description: string;
}
