interface PostBannerItem {
  children: React.ReactNode;
  className?: string;
}

export default function PostBannerItem({
  children,
  className,
}: PostBannerItem) {
  return (
    <div className={`bg-white pt-20 pb-24 px-10 col-span-5 ${className}`}>
      {children}
    </div>
  );
}
