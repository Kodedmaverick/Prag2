import React from "react";

function ImgPlate({ caption, corner, src, alt, style, className }) {
  return (
    <div className={"imgplate " + (className || "") + (src ? " has-image" : "")} style={style}>
      {src ? <img className="imgplate__img" src={src} alt={alt || caption || ""} /> : null}
      {corner ? <div className="imgplate__corner">{corner}</div> : null}
      {caption && !src ? <div className="imgplate__caption">{caption}</div> : null}
    </div>
  );
}

function ArrowRight({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowUpRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 11L11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3l10 10M13 3L3 13" strokeLinecap="round" />
    </svg>
  );
}

function Eyebrow({ children, className }) {
  return <div className={"eyebrow " + (className || "")}>{children}</div>;
}

function PageHead({ crumb, num, title, intro, lead }) {
  return (
    <header className="page-head">
      <div className="container">
        <div className="page-head__crumb">
          <span>{crumb}</span>
        </div>
        <h1 className="display page-head__title">{title}</h1>
        {intro || lead ? (
          <div className="page-head__intro">
            <div className="section-num">{intro ? "Introduction" : ""}</div>
            <p className="lead">{lead}</p>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export { ImgPlate, ArrowRight, ArrowUpRight, CloseIcon, Eyebrow, PageHead };
