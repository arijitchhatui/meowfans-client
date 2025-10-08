export const configService = {
  get NEXT_PUBLIC_AUTH_URL() {
    return process.env.NEXT_PUBLIC_AUTH_URL!;
  },
  get NEXT_PUBLIC_API_GRAPHQL_URL() {
    return process.env.NEXT_PUBLIC_API_GRAPHQL_URL!;
  },
    get NEXT_PUBLIC_APP_URL() {
    return process.env.NEXT_PUBLIC_APP_URL!;
  }
};
