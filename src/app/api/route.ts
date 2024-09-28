import { api } from '@/lib/FetchClient';

export async function GET() {
  const stacks = await api.unauthorized.get('/list', {
    next: {
      revalidate: 60 * 60 * 24,
      tags: ['stacks'],
    },
  });

  return Response.json({ stacks });
}

export async function POST(request: Request) {
  const body = await request.json();
  const response = api.unauthorized.post('/list', { body });

  return Response.json(response);
}
