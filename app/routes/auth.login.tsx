import { Form } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { authenticator } from "common/auth/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Sign In - What to Eat Near Me" },
    { name: "description", content: "Sign in to What to Eat Near Me to save your preferences and get personalized restaurant recommendations." },
    { name: "robots", content: "noindex, nofollow" },
    // Open Graph
    { property: "og:title", content: "Sign In - What to Eat Near Me" },
    { property: "og:description", content: "Sign in to What to Eat Near Me to save your preferences and get personalized restaurant recommendations." },
    // Twitter
    { name: "twitter:title", content: "Sign In - What to Eat Near Me" },
    { name: "twitter:description", content: "Sign in to What to Eat Near Me to save your preferences and get personalized restaurant recommendations." },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
};

export default function Login() {
  return (
    <>
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-red-600">
          Let&apos;s sign in first
        </h2>
      </div>
      <Form action="/auth/google" method="post" className="mt-8">
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-white hover:bg-gray-50 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-300"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>
      </Form>
    </>
  );
} 