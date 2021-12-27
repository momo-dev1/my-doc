import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default function Code({ code, language }) {
  const ref = useRef(null);
  const [text, setText] = useState("");

  function copyToClipboard(e) {
    setText(ref.current);
    navigator.clipboard.writeText(text.textContent);
  }
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="relative Code">
      <pre
        data-language={language}
        className={` language-${language}`}
        style={{ background: "none" }}
      >
        <code ref={ref}>{code}</code>
      </pre>
      <span
        onClick={copyToClipboard}
        className="absolute cursor-pointer text-white/50 hover:text-white top-2 right-2"
      >
        <CopyIcon />
      </span>
    </div>
  );
}
function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  );
}
