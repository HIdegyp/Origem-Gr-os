export const AnnouncementBar = () => {
  return (
    <>
      <style>{`
        @keyframes announcement-bar-right {
          from { transform: translateX(-100%); }
          to { transform: translateX(100vw); }
        }
        @media (prefers-reduced-motion: reduce) {
          .announcement-bar-track {
            animation: none !important;
          }
        }
      `}</style>
      <div
        className="relative h-[20px] w-full overflow-hidden bg-[#1c1c19] text-white"
        role="banner"
      >
        <div className="announcement-bar-track absolute left-0 top-0 flex h-[20px] w-max items-center [animation:announcement-bar-right_28s_linear_infinite]">
          <p className="m-0 whitespace-nowrap px-12 text-center text-[9px] font-extrabold leading-none tracking-[0.25px]">
            FRETE GRÁTIS PARA TODO O BRASIL EM COMPRAS ACIMA DE R$ 200
            <span aria-hidden="true" className="mx-1 inline-block"> • </span>
            GANHE 10% DE DESCONTO NA PRIMEIRA COMPRA!
          </p>
          <p
            className="m-0 whitespace-nowrap px-12 text-center text-[6.5px] font-extrabold leading-none tracking-[0.25px]"
            aria-hidden="true"
          >
            FRETE GRÁTIS PARA TODO O BRASIL EM COMPRAS ACIMA DE R$ 200
            <span aria-hidden="true" className="mx-1 inline-block"> • </span>
            GANHE 10% DE DESCONTO NA PRIMEIRA COMPRA!
          </p>
        </div>
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[20px] w-12 border-l border-l-white/10 bg-[#1c1c19] text-center text-[8px] font-bold leading-[20px] text-[#f0ede9]"
        >
        </div>
      </div>
    </>
  );
};

export default AnnouncementBar;
