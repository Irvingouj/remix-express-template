import { type MetaFunction, useLoaderData } from "@remix-run/react";
import { authenticator } from "common/auth/auth.server";
import { db } from "common/db";
import { users } from "common/db/schema";
import { eq } from "drizzle-orm";
import { UserProvider } from "~/context/UserContext";
import { LoaderFunctionArgs } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Home - Remix Template" },
    { name: "description", content: "Welcome to your new Remix application" },
    // Open Graph
    { property: "og:title", content: "Home - Remix Template" },
    { property: "og:description", content: "Welcome to your new Remix application" },
    // Twitter
    { name: "twitter:title", content: "Home - Remix Template" },
    { name: "twitter:description", content: "Welcome to your new Remix application" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const cookie = await authenticator.isAuthenticated(request);
  if (cookie?.id) {
    const user = await db.query.users.findFirst({
      where: eq(users.id, cookie.id),
    });

    return Response.json({ user });
  }

  return Response.json({});
}

function HomeContent() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Welcome to Remix Template
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          {user ? (
            <div>
              <p className="text-xl text-gray-700 mb-4">
                Welcome back, {user.name}!
              </p>
              <p className="text-gray-600">
                You are successfully authenticated.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-xl text-gray-700 mb-4">
                Get Started
              </p>
              <p className="text-gray-600 mb-4">
                This template includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Authentication with Google OAuth</li>
                <li>Database integration with Drizzle ORM</li>
                <li>Docker configuration</li>
                <li>TypeScript support</li>
                <li>Tailwind CSS styling</li>
              </ul>
              <div className="mt-6">
                <a
                  href="/auth/login"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <UserProvider user={user}>
      <HomeContent />
    </UserProvider>
  );
}
