import { format, parseISO, addHours } from "date-fns";

export function formatDate(date: string) {
  return format(addHours(parseISO(date), 5), "MMM d, y");
}
