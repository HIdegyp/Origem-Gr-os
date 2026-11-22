
import heartIcon from '../../dist/icons/heart.svg';
import bagIcon from '../../dist/icons/bag.svg';

const Header = () => {
  return (
    <header className="grid h-[44px] items-center border-b border-[rgba(28,28,25,0.08)] bg-[#f7f4ef] px-[6.2%] md:grid-cols-[180px_1fr_316px_88px] md:gap-[18px] max-md:grid-cols-[1fr_auto] max-md:h-16 max-md:px-[18px]">
      <a
        className="whitespace-nowrap text-[16px] no-underline text-[var(--preto)] [font-family:var(--font-titulo)]"
        href="#"
        aria-label="Origem & Grão"
      >
        Origem &amp; Grão
      </a>
      <nav
        className="flex h-full justify-center gap-[38px] max-md:hidden"
        aria-label="Navegação principal"
      >
        <a className="flex items-center text-[10px] leading-[1.08] no-underline text-[var(--preto)]" href="#">Início</a>
        <a className="flex items-center text-[10px] leading-[1.08] no-underline text-[var(--preto)]" href="#">Nossos<br />Cafés</a>
        <a className="flex items-center text-[10px] leading-[1.08] no-underline text-[var(--preto)]" href="#">Métodos &amp;<br />Acessórios</a>
        <a className="flex items-center text-[10px] leading-[1.08] no-underline text-[var(--preto)]" href="#">Clube de<br />Assinatura</a>
        <a className="flex items-center text-[10px] leading-[1.08] no-underline text-[var(--preto)]" href="#">Nossa<br />História</a>
      </nav>
      <label className="flex h-[30px] items-center gap-[7px] rounded-full border border-[rgba(28,28,25,0.12)] bg-white px-[10px] text-[#77736f] max-md:hidden">
        <span aria-hidden="true">⌕</span>
        <input
          className="w-full border-0 bg-transparent text-[8px] outline-none"
          type="search"
          placeholder="Buscar cafés, origens, torras..."
        />
      </label>
      <div className="flex items-center justify-end gap-[14px]">
        <button className="relative h-6 w-6 cursor-pointer border-0 bg-transparent p-1" type="button" aria-label="Favoritos">
          <img className="h-full w-full object-contain" src={heartIcon} alt="" />
        </button>
        <button className="relative h-6 w-6 cursor-pointer border-0 bg-transparent p-1" type="button" aria-label="Sacola">
          <img className="h-full w-full object-contain" src={bagIcon} alt="" />
        
        </button>
      </div>
    </header>
  );
};

export default Header;