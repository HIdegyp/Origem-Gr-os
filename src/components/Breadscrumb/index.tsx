import './index.css';

const Breadscrumb = () => {
  return (
    <section className="breadcrumb-bar">
      <nav aria-label="Breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <a href="/">Início</a>
            <span className="breadcrumb-separator" aria-hidden="true">›</span>
          </li>
          <li className="breadcrumb-item">
            <a href="/cafes">Nossos Cafés</a>
            <span className="breadcrumb-separator" aria-hidden="true">›</span>
          </li>
          <li aria-current="page" className="breadcrumb-current">
            Microlote Caparaó Floral &amp; Melaço
          </li>
        </ol>
      </nav>
      <div className="breadcrumb-badge">
        <span className="breadcrumb-badge-dot" aria-hidden="true" />
        <span>Torra artesanal semanal • Safra fresca 2024</span>
      </div>
    </section>
  );
};

export default Breadscrumb;
