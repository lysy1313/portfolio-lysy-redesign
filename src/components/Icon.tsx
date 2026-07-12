import type { SVGProps } from "react";
import type { IconName } from "../content/siteContent";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  title?: string;
}

export function Icon({ name, title, ...props }: IconProps) {
  const commonProps: SVGProps<SVGSVGElement> = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    ...props,
  };

  return (
    <svg {...commonProps}>
      {title ? <title>{title}</title> : null}
      {renderIcon(name)}
    </svg>
  );
}

function renderIcon(name: IconName) {
  switch (name) {
    case "arrow-down":
      return (
        <>
          <path d="M12 4v15" />
          <path d="m6.5 13.5 5.5 5.5 5.5-5.5" />
        </>
      );
    case "arrow-up-right":
      return (
        <>
          <path d="M7 17 17 7" />
          <path d="M8 7h9v9" />
        </>
      );
    case "check":
      return <path d="m5 12.5 4.2 4.2L19 7" />;
    case "code":
      return (
        <>
          <path d="m8.5 8-4 4 4 4" />
          <path d="m15.5 8 4 4-4 4" />
          <path d="m13.5 5-3 14" />
        </>
      );
    case "copy":
      return (
        <>
          <rect x="8" y="8" width="11" height="11" rx="2" />
          <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
        </>
      );
    case "database":
      return (
        <>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
          <path d="M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </>
      );
    case "github":
      return (
        <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-3 .7-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.8 1.2 3.5.9.1-.7.4-1.2.7-1.5-2.4-.3-4.9-1.2-4.9-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.2 10.2 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.2-2.5 5.1-4.9 5.4.4.3.7 1 .7 2v3c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />
      );
    case "layers":
      return (
        <>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </>
      );
    case "menu":
      return (
        <>
          <path d="M5 8h14" />
          <path d="M5 16h14" />
        </>
      );
    case "close":
      return (
        <>
          <path d="m6 6 12 12" />
          <path d="M18 6 6 18" />
        </>
      );
    case "spark":
      return (
        <>
          <path d="M12 2.5c.6 4.8 2.7 7 7.5 7.5-4.8.6-7 2.7-7.5 7.5-.6-4.8-2.7-7-7.5-7.5 4.8-.6 7-2.7 7.5-7.5Z" />
          <path d="M19 16.5c.2 1.7 1 2.5 2.5 2.5-1.5.2-2.3 1-2.5 2.5-.2-1.5-1-2.3-2.5-2.5 1.5-.2 2.3-1 2.5-2.5Z" />
        </>
      );
    case "tools":
      return (
        <>
          <path d="M14.5 6.5a4.2 4.2 0 0 0-5.4 5.4L3.8 17.2a2.1 2.1 0 0 0 3 3l5.3-5.3a4.2 4.2 0 0 0 5.4-5.4l-2.6 2.6-3-3 2.6-2.6Z" />
          <path d="m15 15 5 5" />
        </>
      );
    default:
      return null;
  }
}
