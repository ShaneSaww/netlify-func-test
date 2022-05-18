import { Handler } from '@netlify/functions'
import { Logger } from "tslog";

const log: Logger = new Logger({ name: "myLogger" });
export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  console.log("type-script console log")
  console.error("type-script console error log")
  console.log("type-script console log after error")
  log.silly("I am a silly tSlOg.");
  log.debug("I am a debug tslog.");
  log.info("I am an info tslog.");
  log.warn("I am a warn tslog with a json object:", { foo: "bar" });
  log.error("I am an error tslog");

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  }
}
