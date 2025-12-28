import { ReactNode } from "react";

export function Container(props: { children: ReactNode; className?: string }) {
  return <div className={`container ${props.className ?? ""}`.trim()}>{props.children}</div>;
}
