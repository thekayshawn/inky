import * as greeting from "./greeting";
import * as list from "./list";
import * as profile from "./profile";

export type Example = {
  name: string;
  html: string;
  json: string;
};

export const examples: Record<string, Example> = {
  greeting: {
    name: "Welcome Email",
    ...greeting,
  },
  list: {
    name: "Order Confirmation",
    ...list,
  },
  profile: {
    name: "Password Reset",
    ...profile,
  },
};