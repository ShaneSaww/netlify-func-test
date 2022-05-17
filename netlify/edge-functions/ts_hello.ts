
  import type { Context } from "netlify:edge";

export default async (request: Request, context: Context) => {
  context.log("Typescript Context Logging");
  console.log("Typescript console Logging");

  return new Response("Hello\n", {
    headers: { "content-type": "text/html" },
  });
};