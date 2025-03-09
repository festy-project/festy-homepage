export type PageProps<T, P extends Record<any, any> = Record<any, any>> = {
  params: Promise<T>;
  searchParams: Promise<P>;
};
