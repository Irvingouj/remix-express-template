import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "common/auth/auth.server";

export const loader: LoaderFunction = () => redirect("/login");

export const action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("google", request);
}; 