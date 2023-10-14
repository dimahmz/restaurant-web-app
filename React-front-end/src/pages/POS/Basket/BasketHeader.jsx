/* eslint-disable react/prop-types */

const Header = () => {
  return (
    <header className="bg-[#f4f9fc] flex border border-slate-600 text-center">
      <div className="w-12 border border-slate-600 p-1">S/L</div>
      <div className="w-full border  border-slate-600 p-1">Food item</div>
      <div className="border w-28 border-slate-600 p-1">QTY</div>
      <div className="w-[120px] border border-slate-600 p-1">Price</div>
    </header>
  );
};

export default Header;
