export default async (Request, Context) => {
    Context.log(`Javscript Context Logging`);
    console.log(`Javscript Console Logging`);
    return new Response("Hello\n", {
      headers: { "content-type": "text/html" },
    });
  };