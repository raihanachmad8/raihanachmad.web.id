import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param inputs - An array of class values which could be strings, arrays, or objects.
 * @returns A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats the given datetime value into a localized date string.
 *
 * @param datetime - The datetime value to be formatted. This can be a string, number, or Date object.
 * @returns A string representing the formatted date in 'en-US' locale, displaying the year and short month.
 */
export const formatDatetime = (datetime: string | number | Date): string => {
  const d = new Date(datetime);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};
