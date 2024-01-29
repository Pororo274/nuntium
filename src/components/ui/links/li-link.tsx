interface LiLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function LiLink({ children, to }: LiLinkProps) {
  return (
    <li>
      <a href={to} className="font-medium lg:text-xl">
        {children}
      </a>
    </li>
  );
}
