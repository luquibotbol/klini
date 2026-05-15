type Props = {
  url: string;
  src: string;
  alt: string;
  eager?: boolean;
};

export default function SafariFrame({ url, src, alt, eager }: Props) {
  return (
    <div className="safari-frame">
      <div className="safari-chrome">
        <div className="safari-dots">
          <span className="safari-dot r" />
          <span className="safari-dot y" />
          <span className="safari-dot g" />
        </div>
        <div className="safari-url">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          {url}
        </div>
        <div />
      </div>
      <div className="safari-body">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
      </div>
    </div>
  );
}
