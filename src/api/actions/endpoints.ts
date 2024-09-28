'use server';

import { auth } from '@/auth';

export async function getAccess() {
  const session = await auth();
  return session?.user?.access_token;
}
