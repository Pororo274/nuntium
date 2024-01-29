interface PostItemLayoutProps {
  children: React.ReactNode;
}

export default function PostItemLayout({ children }: PostItemLayoutProps) {
  return <div className="flex gap-12 items-center">{children}</div>;
}
