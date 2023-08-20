import * as React from "react";

import { cn } from "@/lib/utils";
import Title from "./typography/TItle";
import Text from "./typography/Text";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-[40px] shadow-lg", className)} {...props} />
));
Card.displayName = "Card";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <Title level={1} ref={ref} className={cn("mb-6", className)}>
    {props.children}
  </Title>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Text level={3} ref={ref} className={cn("mb-6", className)}>
    {props.children}
  </Text>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mb-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(" ", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardFooter, CardTitle, CardDescription, CardContent };
