import React from "react";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/typography/TItle";
import Text from "@/components/ui/typography/Text";
import CodeSnippet from "@/examples/internal-app-only/CodeSnippet";

import Link from "next/link";
import Select from "@/components/ui/select";

const singleSelectOptions = [
  { value: 0, label: "d@gmail.com" },
  { value: 1, label: "d@yahoo.com" },
  { value: 2, label: "d@mail.com" },
];

const SelectExample = () => {
  return (
    <main className=" border border-gray-400 shadow-md p-4">
      <Title className="mb-4" level={4}>
        Select
      </Title>
      <div className=" grid grid-cols-6 gap-8">
        <Select
          label="Email"
          assertiveText="assertiveText"
          options={singleSelectOptions}
          onChange={(val: string) => {}}
        />
        <Select
          label="Email"
          size="small"
          assertiveText="assertiveText"
          options={singleSelectOptions}
          onChange={(val: string) => {}}
        />
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
        const singleSelectOptions = [
          { value: 0, label: "d@gmail.com" },
          { value: 1, label: "d@yahoo.com" },
          { value: 2, label: "d@mail.com" },
        ];
        <Select
          label="Email"
          assertiveText="assertiveText"
          options={singleSelectOptions}
          onChange={(val: string) => {}}
        />
        <Select
          label="Email"
          size="small"
          assertiveText="assertiveText"
          options={singleSelectOptions}
          onChange={(val: string) => {}}
        />
    `}
      />
    </main>
  );
};

export default SelectExample;
