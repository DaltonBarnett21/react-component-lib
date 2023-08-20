import Title from "@/components/ui/typography/TItle";
import Text from "@/components/ui/typography/Text";
import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className=" flex flex-col h-screen ">
      <nav className=" p-6 flex justify-between items-center bg-darkBlueNeutral-100 text-white-50   ">
        <Title level={3}>Global Components</Title>
        <hr className="my-4" />
        <div className="flex space-x-5">
          <Link href={"/controls"}>
            <Text
              weight="medium"
              className="  cursor-pointer hover:text-white-100 "
              level={4}
            >
              Form Fields and Controls
            </Text>
          </Link>
          <Link href={"/forms"}>
            <Text
              weight="medium"
              className=" cursor-pointer hover:text-white-100"
              level={4}
            >
              Forms
            </Text>
          </Link>
        </div>
      </nav>
      <div className=" ">{children}</div>
    </div>
  );
};

export default Layout;
