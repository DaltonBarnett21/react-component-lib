import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode[];
}

const ButtonGroup = ({ className, children, ...props }: Props) => {
  return (
    <div {...props} className={cn("grid grid-cols-12 gap-2", className)}>
      {children?.map((child) => {
        return child;
      })}
    </div>
  );
};

export default ButtonGroup;
