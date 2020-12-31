import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    // handle cmd / control click functionality
    // metaKey for macOS and ctrlKey for windows
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
