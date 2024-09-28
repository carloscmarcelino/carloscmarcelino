export type StackResponse = Array<{
  id: string;
  name: string;
  developers: number;
}>;

export type StackBody = {
  name: string;
  developers: number;
};
