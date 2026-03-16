const Footer = () => (
  <>
    {/* Legal disclaimer */}
    <div className="border-t border-creme-3 bg-creme-2 px-5 py-5 text-center">
      <p className="mx-auto max-w-[700px] text-[11px] leading-[1.7] text-foreground-muted">
        ⚕️ Este produto é de natureza educacional e não substitui orientação, diagnóstico ou tratamento médico profissional. Consulte sempre um profissional de saúde antes de iniciar qualquer protocolo alimentar ou de suplementação.
      </p>
    </div>

    {/* Footer */}
    <footer className="bg-[#0E1410] px-5 py-6 text-center">
      <p className="text-[11.5px] leading-[1.85] text-primary-foreground/20">
        © 2025 RESET Detox Ayurvédico. Todos os direitos reservados.<br />
        <a href="#" className="text-primary-foreground/30 no-underline">Política de Privacidade</a> · <a href="#" className="text-primary-foreground/30 no-underline">Termos de Uso</a> · <a href="#" className="text-primary-foreground/30 no-underline">Contato</a>
      </p>
    </footer>
  </>
);

export default Footer;
