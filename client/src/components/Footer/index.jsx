export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 p-4 text-center">
      <ul className="flex gap-8 font-medium">
        <li>
          <a
            href="https://riogrande.atende.net/cidadao"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primaryHover transition-colors"
          >
            Prefeitura do Rio Grande
          </a>
        </li>
        <li>
          <a
            href="https://www.defesacivil.rs.gov.br/inicial"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primaryHover transition-colors"
          >
            Defesa Civil do Rio Grande do Sul
          </a>
        </li>
        <li>
          <a
            href="https://ajudariogrande.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primaryHover transition-colors"
          >
            Ajuda Rio Grande
          </a>
        </li>
      </ul>
      <p className="text-dark text-sm">
        Desenvolvido com <span className="text-red-600">❤</span> por{" "}
        <a
          href="https://github.com/Saesel"
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:text-primaryHover transition-colors"
        >
          Saesel
        </a>
      </p>
    </footer>
  );
}
