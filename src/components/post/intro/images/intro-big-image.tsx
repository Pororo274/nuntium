interface IntroBigImageProps {
  imagePath: string;
}

export default function IntroBigImage({ imagePath }: IntroBigImageProps) {
  return (
    <figure className="w-[370px] h-[290px] overflow-hidden">
      <img src={imagePath} alt="" className="w-full h-full object-cover" />
    </figure>
  );
}
