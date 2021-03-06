import { Context } from "https://deno.land/x/oak/mod.ts";
import { red } from "https://deno.land/std@v0.39.0/fmt/colors.ts";

/** Catch errors and respond with internal server error aswell as logging the error to console */
export const Error = (responseBody: any = { msg: "Internal Server Error" }) => {
  return async (context: Context, next: any) => {
    try {
      await next();
    } catch (err) {
      context.response.status = 500;
      context.response.body = responseBody;
      console.log(red("ERROR: ") + err.message);
    }
  };
};
