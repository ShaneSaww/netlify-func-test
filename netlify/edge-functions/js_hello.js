export default async (Request, Context) => {
    Context.log(`Javascript Context Logging`);
    console.log(`Javascript Console Logging`);
    return new Response("Hello\n", {
      headers: { "content-type": "text/html" },
    });
  };
