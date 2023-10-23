import React, { useEffect } from "react";

import { Text } from "./typography/Text";
import { XCircle } from "lucide-react";
import { cn } from "../lib/utils";

interface Props {
  value: string[] | string;
  deleteTag?: any;
  label?: string;
  className?: string;
}

export const Chip = ({ deleteTag, value, label, className }: Props) => {
  useEffect(() => {
    console.log("hkjhjkhjk", value);
  }, [value]);

  return (
    <>
      {value && (
        <span className="flex">
          <div
            className={cn(
              "flex justify-center items-center m-1 px-2 py-1 border border-gray-300 shadow-md   rounded-full bg-gray-200 text-black-300 ",
              className
            )}
          >
            <Text
              className="  max-w-[275px] whitespace-nowrap overflow-hidden text-ellipsis "
              level={5}
            >
              {label} = {value}
            </Text>
            <XCircle
              onClick={() => deleteTag()}
              className=" fill-black-200 text-gray-300 cursor-pointer"
            />
          </div>
        </span>
      )}
    </>
  );
};
