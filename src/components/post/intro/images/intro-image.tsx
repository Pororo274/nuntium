interface IntroImageProps {
  imagePath: string;
}

export default function IntroImage({ imagePath }: IntroImageProps) {
  return (
    <figure className="w-[230px] h-[180px] overflow-hidden">
      <img src={imagePath} alt="" className="w-full h-full object-cover" />
    </figure>
  );
}
