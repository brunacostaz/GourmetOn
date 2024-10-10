import React from 'react';
import '../../variaveis.css';

const Footer = ({ sobreRef, funcionalidadesRef, receitasRef, depoimentosRef, newsletterRef }) => {
  const scrollToSection = (ref) => {
    if (ref.current) {
      const headerHeight = 80; // Ajuste a altura do header se necessário
      const sectionTop = ref.current.offsetTop;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  const styles = {
    footerContainer: {
      width: '100%',
      backgroundColor: 'var(--marrom-claro)',
      overflow: 'hidden',  
    },
    footer: {
      backgroundColor: 'var(--marrom-claro)',
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box', 
    },
    sectionWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1000px',
      boxSizing: 'border-box',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      flex: 1,
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '10px',
      color: 'white',
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      justifyContent: 'center',
    },
    bottomBar: {
      backgroundColor: 'var(--marrom-escuro)',
      padding: '10px 20px',
      textAlign: 'center',
      color: 'white',
      fontSize: '0.9em',
      marginTop: '20px',
      width: '100%',
      position: 'relative',
      boxSizing: 'border-box',
    },
    iconImage: {
      width: '20px',
      height: '20px',
    },
  };

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.footer}>
        <div style={styles.sectionWrapper}>
          <div style={styles.section}>
            <h3 style={styles.title}>Navegue pelo site</h3>
            <span style={styles.link} onClick={() => scrollToSection(sobreRef)}>Sobre</span>
            <span style={styles.link} onClick={() => scrollToSection(funcionalidadesRef)}>Funcionalidades</span>
            <span style={styles.link} onClick={() => scrollToSection(receitasRef)}>Receitas</span>
            <span style={styles.link} onClick={() => scrollToSection(depoimentosRef)}>Depoimentos</span>
            <span style={styles.link} onClick={() => scrollToSection(newsletterRef)}>Newsletter</span>
          </div>
          <div style={styles.section}>
            <h3 style={styles.title}>Nossas redes sociais</h3>
            <div style={styles.icon}>
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" style={styles.iconImage} />
              <span>Bruna Candeias</span>
            </div>
            <div style={styles.icon}>
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" style={styles.iconImage} />
              <span>Sofia Fernandes</span>
            </div>
            <div style={styles.icon}>
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" style={styles.iconImage} />
              <span>Ali Andrea</span>
            </div>
            <div style={styles.icon}>
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" style={styles.iconImage} />
              <span>Laura Souza</span>
            </div>
            <div style={styles.icon}>
              <img src={`${process.env.PUBLIC_URL}/img/linkedin.png`} alt="LinkedIn" style={styles.iconImage} />
              <span>Luiz Felipe</span>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        GourmetOn © 2024. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
