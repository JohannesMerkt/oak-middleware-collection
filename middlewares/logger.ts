import { Context } from "https://deno.land/x/oak/mod.ts";
import {
  green,
  cyan,
  bold,
} from "https://deno.land/std@v0.39.0/fmt/colors.ts";

/** Log requests in console with color */
export const Logger = async (context: Context, next: any) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    green(context.request.method) + " " + cyan(context.request.url) + " - " +
      bold(String(rt)),
  );
};
