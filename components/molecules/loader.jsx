import { SpinnerProps, Overlay, Spinner } from "@blueprintjs/core";
import React from "react";

const Loader = ({
  className,
  intent,
  size,
  value,
  tagName,
  autoFocus,
  enforceFocus,
  isOpen,
}) => {
  return (
    <Overlay
      className="vt-spinner-overlay"
      isOpen={isOpen}
      autoFocus={autoFocus}
      enforceFocus={enforceFocus}
    >
      <div className="h-screen fixed w-full top-0 z-40 flex justify-center items-center">
        <Spinner
          className={className}
          intent={intent}
          size={size}
          value={value}
          tagName={tagName}
        />
      </div>
    </Overlay>
  );
};
Loader.defaultProps = {
  isOpen: true,
  autoFocus: false,
  enforceFocus: false,
};
export default Loader;
