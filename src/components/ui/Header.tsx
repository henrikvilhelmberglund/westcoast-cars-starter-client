// ReactNode
import { type ReactNode } from "react";
import "./header.css";

type HeaderProps = {
  children: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <header className="page-header">{children}</header>;
}
