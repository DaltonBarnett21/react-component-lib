import React from "react";
import { Input } from "@/components/ui/input";
import Title from "@/components/ui/typography/TItle";
import Text from "@/components/ui/typography/Text";
import CodeSnippet from "@/examples/internal-app-only/CodeSnippet";

import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

const TextAreaExample = () => {
  return (
    <main className=" border border-gray-400 shadow-md p-4 ">
      <Title className="mb-4" level={4}>
        Text Area
      </Title>
      <div className=" grid grid-cols-3 gap-8">
        <Textarea
          label="Field Label"
          assertiveText="assertiveText"
          placeholder="Placeholder (optional)"
        />
        <Textarea
          label="Field Label"
          variant={"available"}
          assertiveText="assertiveText"
          placeholder="Placeholder (optional)"
        />
        <Textarea
          label="Field Label"
          variant={"display"}
          assertiveText="assertiveText"
          placeholder="Placeholder (optional)"
          value={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur similique cupiditate harum magni eligendi aut quisquam dolor consectetur consequatur, unde qui ipsa, in corporis delectus dolorum minus tempore optio atque!"
          }
        />

        <Textarea
          label="Field Label"
          disabled
          assertiveText="assertiveText"
          placeholder="Placeholder (optional)"
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
      <Textarea
        label="Field Label"
        assertiveText="assertiveText"
        placeholder="Placeholder (optional)"
      />
      <Textarea
        label="Field Label"
        variant={"available"}
        assertiveText="assertiveText"
        placeholder="Placeholder (optional)"
      />
      <Textarea
        label="Field Label"
        variant={"display"}
        assertiveText="assertiveText"
        placeholder="Placeholder (optional)"
      />
      <Textarea
        label="Field Label"
        disabled
        assertiveText="assertiveText"
        placeholder="Placeholder (optional)"
      />
    
    
    `}
      />
    </main>
  );
};

export default TextAreaExample;
