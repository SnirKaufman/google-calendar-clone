import { useContext } from "react";
import { Context } from "./events";

export const EVENT_COLORS = ["red", "green", "blue"] as const;

export function useEvents() {
  const value = useContext(Context);
  if (value == null) {
    throw new Error("useEvents must be used within as EventsProvider ");
  }

  return value;
}
