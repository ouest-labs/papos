
interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-xl text-muted-foreground font-bold">{label}</p>
    </div>
  );
};

export default Header;
