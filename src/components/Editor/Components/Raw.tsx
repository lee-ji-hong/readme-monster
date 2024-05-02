import React, { useRef } from "react";
import { Copy } from "@carbon/icons-react";
import { ValueType } from "../types";

const Raw = ({ value }: ValueType) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCopyClick = async (textToCopy: string) => {
    textAreaRef.current?.select();
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Copying is complete.");
    } catch (e) {
      alert("Copying failed.");
    }
  };

  return (
    <div className="w-full h-full p-[20px] rounded-[8px] border-solid border border-textTertiary relative">
      {value!.length > 0 && (
        <div className="h-auto absolute right-[20px]" onClick={() => handleCopyClick(value!)}>
          <Copy size={18} className="cursor-pointer" />
        </div>
      )}
      <textarea ref={textAreaRef} key={value} readOnly className="h-full w-full resize-none focus:outline-none p-0">
        {value}
      </textarea>
    </div>
  );
};

export default Raw;
