import { Code } from "lucide-react";
import { useState } from "react";
import { CopyBlock, atomOneDark } from "react-code-blocks";

const CodeSnippet = (props: any) => {
  const [openSnippet, setOpenSnippet] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpenSnippet(!openSnippet)}
        className=" flex justify-center p-2 cursor-pointer hover:bg-gray-300"
      >
        <Code />
        <p className="ml-2">Show Source</p>
      </div>

      {openSnippet && (
        //@ts-ignore
        <CopyBlock
          text={props.code}
          //@ts-ignore
          theme={atomOneDark}
          language="jsx"
          wrapLongLines={true}
          customStyle={{
            padding: "0px",
          }}
        />
      )}
    </div>
  );
};
export default CodeSnippet;
