import { Context } from "https://deno.land/x/oak/mod.ts";

export default async (context: Context, next: any) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set("X-Response-Time", ms + "ms");
};
