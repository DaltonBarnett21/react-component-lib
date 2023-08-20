import React from "react";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/typography/TItle";
import Text from "@/components/ui/typography/Text";
import CodeSnippet from "@/examples/internal-app-only/CodeSnippet";

import Link from "next/link";

const InputExample = () => {
  return (
    <main className=" border border-gray-400 shadow-md p-6 ">
      <Title className="mb-4" level={4}>
        Input
      </Title>
      <div className=" grid grid-cols-6 gap-8">
        <Input
          label="UserName"
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          variant={"available"}
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          readOnly
          value={"I'm read only"}
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          variant={"error"}
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          disabled
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          assertiveText="assertiveText"
          placeholder="UserName"
        />

        <Input
          label="UserName"
          assertiveText="assertiveText"
          placeholder="UserName"
          size="small"
        />

        <Input
          label="UserName"
          variant={"available"}
          assertiveText="assertiveText"
          placeholder="UserName"
          size="small"
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
        <Input
        label="UserName"
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        variant={"available"}
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        readOnly
        value={"I'm read only"}
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        variant={"error"}
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        disabled
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        assertiveText="assertiveText"
        placeholder="UserName"
      />

      <Input
        label="UserName"
        assertiveText="assertiveText"
        placeholder="UserName"
        size="small"
      />

      <Input
        label="UserName"
        variant={"available"}
        assertiveText="assertiveText"
        placeholder="UserName"
        size="small"
      />
    
    
    `}
      />
    </main>
  );
};

export default InputExample;
