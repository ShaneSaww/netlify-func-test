export default async (Request, Context) => {
    Context.log(`Javascript Context Logging`);
    console.log(`Javascript Console Logging`);
     console.warn(` warn level Javascript Console Logging`);
    console.error(` error level Javascript Console Logging`);
    return new Response("Hello\n", {
      headers: { "content-type": "text/html" },
    });
  };
