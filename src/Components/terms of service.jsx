import React from "react";
import termsText from "../../terms.txt?raw";

const TermsOfService = () => {
  const renderInline = (text) => {
    // Very small inline markdown: convert **bold** to <strong>.
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const inner = part.slice(2, -2);
        return (
          <strong key={idx} className="font-bold">
            {inner}
          </strong>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  const isHeading = (line) => line.trimStart().startsWith("### ");
  const isBullet = (line) => /^\s*-\s+/.test(line);

  const rawLines = termsText.split(/\r?\n/);
  const blocks = [];
  let i = 0;

  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (isHeading(line)) {
      const title = trimmed.replace(/^###\s+/, "");
      blocks.push(
        <h2
          key={`h-${i}`}
          className="text-xl sm:text-2xl font-black text-gray-900 mt-8 mb-3"
        >
          {title}
        </h2>
      );
      i += 1;
      continue;
    }

    if (isBullet(line)) {
      const items = [];
      while (i < rawLines.length && isBullet(rawLines[i])) {
        const bulletLine = rawLines[i];
        const leadingSpaces = (bulletLine.match(/^\s*/u)?.[0] ?? "").length;
        const indentLevel = Math.min(2, Math.floor(leadingSpaces / 2));
        const content = bulletLine.replace(/^\s*-\s+/, "");
        items.push({ content, indentLevel });
        i += 1;
      }

      blocks.push(
        <ul
          key={`ul-${i}`}
          className="mt-2 space-y-2 list-disc pl-5 text-gray-700 text-sm sm:text-base leading-relaxed"
        >
          {items.map((it, idx) => (
            <li
              key={idx}
              style={{ marginLeft: it.indentLevel * 10 }}
              className="marker:text-green-600"
            >
              {renderInline(it.content)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Paragraph: consume until the next blank line / heading / bullet.
    const paraParts = [];
    while (
      i < rawLines.length &&
      rawLines[i].trim() !== "" &&
      !isHeading(rawLines[i]) &&
      !isBullet(rawLines[i])
    ) {
      paraParts.push(rawLines[i].trim());
      i += 1;
    }

    const paragraph = paraParts.join(" ");
    blocks.push(
      <p
        key={`p-${i}`}
        className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4"
      >
        {renderInline(paragraph)}
      </p>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
          Terms of Service
        </h1>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">
          <div className="font-sans">{blocks}</div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

