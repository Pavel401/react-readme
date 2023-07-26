import React, { useState } from "react";
import "./style.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const MarkdownReact = () => {
  const [markDown, setMarkDown] = useState("This is a heading 1");

  // const markdownConverter = (text) => {
  //   const markdownTags = [
  //     { 0: `#${text}` },
  //     { 1: `##${text}` },
  //     { 2: `###${text}` },
  //     { 3: `**${text}**` },
  //   ];

  //   const finalMap = [
  //     { index: 0, label: "heading1" },
  //     { index: 1, label: "heading2" },
  //     { index: 2, label: "heading3" },
  //     { index: 3, label: "bold" },
  //   ];
  //   const values = markdownTags.map((obj) => Object.values(obj)[0]);
  //   return values;
  // };

  const convertedMarkdown = markdownConverter(markDown);

  return (
    <div className="center-div">
      <textarea
        className="left-side"
        value={markDown}
        onChange={(e) => setMarkDown(e.target.value)}
      ></textarea>
      <div className="right-side">
        <ReactMarkdown>{convertedMarkdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownReact;
