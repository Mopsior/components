import { use } from "react";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const DelayedContent = ({ children }: { children: React.ReactNode }) => {
  use(delay(5000))
  return children
}