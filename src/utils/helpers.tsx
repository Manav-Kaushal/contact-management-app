import { ClassValue } from "./types";

export const classNames = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (typeof arg === "object") {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  });

  return classes.join(" ");
};
