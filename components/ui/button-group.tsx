import React from "react";
import { cn } from "../lib/utils";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode[];
}

export const ButtonGroup = ({ className, children, ...props }: Props) => {
  return (
    <div {...props} className={cn("grid grid-cols-12 gap-2", className)}>
      {children?.map((child) => {
        return child;
      })}
    </div>
  );
};
