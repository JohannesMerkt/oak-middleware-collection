import { Context } from "https://deno.land/x/oak/mod.ts";

export default async (context: Context, next: any) => {
  try {
    await next();
  } catch (err) {
    context.response.status = 500;
    context.response.body = { msg: err.message };
  }
};
