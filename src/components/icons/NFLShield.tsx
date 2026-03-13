export function NFLShield({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2C20 2 6 4 6 4C6 4 5 22 5 24C5 32 12 37 20 39C28 37 35 32 35 24C35 22 34 4 34 4C34 4 20 2 20 2Z"
        fill="hsl(var(--sidebar-primary))"
        stroke="hsl(var(--sidebar-foreground))"
        strokeWidth="1.5"
      />
      <path
        d="M20 6C20 6 10 7.5 10 7.5C10 7.5 9.5 22 9.5 24C9.5 29.5 14 34 20 35.5C26 34 30.5 29.5 30.5 24C30.5 22 30 7.5 30 7.5C30 7.5 20 6 20 6Z"
        fill="hsl(var(--sidebar-background))"
      />
      <text
        x="20"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill="hsl(var(--sidebar-primary))"
        fontFamily="Oswald, sans-serif"
        fontWeight="700"
        fontSize="10"
        letterSpacing="0.5"
      >
        NFL
      </text>
      {/* Stars */}
      <circle cx="12.5" cy="13" r="1.2" fill="hsl(var(--sidebar-primary))" />
      <circle cx="20" cy="11.5" r="1.2" fill="hsl(var(--sidebar-primary))" />
      <circle cx="27.5" cy="13" r="1.2" fill="hsl(var(--sidebar-primary))" />
      {/* Bottom accent */}
      <path
        d="M15 29C15 29 20 31 20 31C20 31 25 29 25 29"
        stroke="hsl(var(--sidebar-primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
