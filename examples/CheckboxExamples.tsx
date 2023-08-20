import Title from "@/components/ui/typography/TItle";
import Link from "next/link";
import React, { useState } from "react";
import CodeSnippet from "./internal-app-only/CodeSnippet";
import Text from "@/components/ui/typography/Text";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio-group";

const CheckboxExamples = () => {
  return (
    <main className=" border border-gray-400 shadow-md p-6 ">
      <Title className="mb-4" level={4}>
        Other Controls
      </Title>

      <div className=" grid grid-cols-6">
        <div className=" grid grid-rows-5">
          <Text className="mb-4 ">Checkbox</Text>
          <Checkbox label="Checkbox 1 Label" />
          <Checkbox label="Checkbox 2 Label" />
          <Checkbox label="Checkbox 3 Label" disabled />
          <Checkbox label="Checkbox 4 Label" disabled checked />
        </div>

        <div className=" grid grid-rows-5">
          <Text className="mb-4">Radio</Text>
          {/* <Radio />
          <Radio />
          <Radio />
          <Radio /> */}
        </div>
      </div>

      <Text level={4} className="mt-4 mb-4 text-center">
        Note. All input elements need to be in the context of a form! To see a
        full example on constructing a form see{" "}
        <Link href={"/forms"}>
          <Text level={4} weight="medium" className=" text-blue-300">
            Forms
          </Text>
        </Link>
      </Text>
      <CodeSnippet
        code={`
        <Checkbox label="Checkbox 1 Label" />
        <Checkbox label="Checkbox 2 Label" />
        <Checkbox label="Checkbox 3 Label" disabled />
        <Checkbox label="Checkbox 4 Label" disabled checked />


`}
      />
    </main>
  );
};

export default CheckboxExamples;
