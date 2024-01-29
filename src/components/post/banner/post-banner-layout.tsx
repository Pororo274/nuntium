interface PostBannerLayoutProps {
  image: string;
  className: string;
  children: React.ReactNode;
}

export default function PostBannerLayout({
  image,
  className,
  children,
}: PostBannerLayoutProps) {
  return (
    <div
      className={`grid grid-cols-12 ${className}`}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {children}
    </div>
  );
}
