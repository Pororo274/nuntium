interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded border-2 border-black py-2 lg:text-xl w-full">
      {children}
    </button>
  );
}
