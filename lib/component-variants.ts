import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex w-full mt-[5px] mb-[5px] rounded-md outline-none border transition-all duration-400  bg-transparent placeholder:text-muted-foreground ",
  {
    variants: {
      variant: {
        default: "border-gray-400 focus:border-blueInteraction-400",
        available:
          "border-blueInteraction-400 focus:border-blueInteraction-400",

        error:
          "bg-red-50 border border-red-400 focus:border-red-400 outline-none ring-0 mt-[5px] mb-[5px]  ",
      },
      size: {
        small: " p-[6px] text-[14px] ",
        large: " p-[12px] ",
      },
      disabled: {
        true: "bg-gray-100 border-gray-300 cursor-not-allowed text-gray-400",
      },
      readOnly: {
        true: "outline-none read-only:focus:border-none read-only:focus:ring-0 border-none font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "large",
    },
  }
);
