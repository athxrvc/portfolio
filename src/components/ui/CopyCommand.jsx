"use client";

import { useRef, useState } from "react";
import PropTypes from "prop-types";

const CopyCommand = ({ command, hint }) => {
  const [status, setStatus] = useState("copy");
  const commandRef = useRef(null);

  const flash = (label) => {
    setStatus(label);
    setTimeout(() => setStatus("copy"), 1800);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      flash("copied");
    } catch {
      // Clipboard blocked: select the command so Ctrl/Cmd+C works instead.
      const selection = window.getSelection();
      selection.removeAllRanges();
      const range = document.createRange();
      range.selectNodeContents(commandRef.current);
      selection.addRange(range);
      flash("press ctrl+c");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full max-w-md items-center justify-between gap-6 rounded-md border border-line px-4 py-3 text-left font-mono text-sm transition-colors hover:border-accent"
    >
      <span>
        <span className="text-accent">$ </span>
        <span ref={commandRef}>{command}</span>
        <span className="mt-1 block text-xs text-muted">{hint}</span>
      </span>
      <span
        aria-live="polite"
        className="shrink-0 text-xs text-muted transition-colors group-hover:text-accent"
      >
        {status}
      </span>
    </button>
  );
};

CopyCommand.propTypes = {
  command: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default CopyCommand;
