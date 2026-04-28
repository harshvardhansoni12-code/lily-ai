import { Logo } from "./logo";

export const NavBar = () => {
  return (
    <div className="h-20 w-full flex justify-between  p-4 bg-rose-200 text-slate-700">
      <div>
        <Logo />
      </div>
      <div></div>
      <div>UserButton</div>
    </div>
  );
};
