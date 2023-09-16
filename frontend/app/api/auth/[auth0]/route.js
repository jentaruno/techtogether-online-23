import {handleAuth} from '@auth0/nextjs-auth0';

// TODO: don't use dev keys on auth0 page
export const GET = handleAuth();