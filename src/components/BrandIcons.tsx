export function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="GitHub">
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#161b22" />
      <path
        d="M50 18c-17 0-31 14-31 31 0 14 9 25 21 29 -0.2-2-0.3-5 0-7 -2-0.4-8-2-8-11 0-5 2-8 4-9 0-2-2-6 0-10 0 0 4-1 9 3 5-2 11-2 16 0 5-4 9-3 9-3 2 4 0.5 8 0 10 2 1 4 4 4 9 0 9-6 10.5-8 11 0.4 1 0.6 3 0.6 5.5v10.5c12-4 20-15 20-29 0-17-14-31-31-31Z"
        fill="#f0f6fc"
      />
    </svg>
  );
}

export function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="LinkedIn">
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#0a66c2" />
      <rect x="22" y="40" width="14" height="38" fill="#f5f8fb" />
      <circle cx="29" cy="26" r="8" fill="#f5f8fb" />
      <path
        d="M48 40h13v6.5c3-4.5 7.5-7.5 14-7.5 11 0 15 7 15 19v20H76V60c0-6-2.5-10-8.5-10-6.5 0-9.5 4.5-9.5 10.5V78H48V40Z"
        fill="#f5f8fb"
      />
    </svg>
  );
}
