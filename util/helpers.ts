import { configService } from './config';

export const isValidEmail = (email: string) => {
  return /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email);
};

export const isValidPassword = (password: string) => {
  return password.length >= 8;
};

export const redirectToAuthApp = (input: { pathname?: string }) => {
  const hostName = configService.NEXT_PUBLIC_AUTH_URL;
  const redirectUrl = new URL(hostName);
  redirectUrl.pathname = input.pathname || '/login';
  return redirectUrl.toString();
};
