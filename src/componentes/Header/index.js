import React, { useState, useEffect, useRef } from 'react';
import '../../variaveis.css';

const Header = ({ sobreRef, funcionalidadesRef, depoimentosRef, contatoRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const headerRef = useRef(null); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  const scrollToSection = (ref) => {
    if (ref.current && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const sectionTop = ref.current.offsetTop;
      window.scrollTo({
        top: sectionTop - headerHeight,
        behavior: 'smooth'
      });
      setMenuOpen(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'var(--bg-color)',
      position: 'fixed',
      width: '100%',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxSizing: 'border-box',
      overflowX: 'hidden',
    },
    logoContainer: {
      flex: 1,
    },
    logo: {
      width: '50px',
      height: 'auto',
    },
    nav: {
      flex: 3,
      display: isMobile ? 'none' : 'flex',
      justifyContent: 'flex-end',
    },
    ul: {
      listStyleType: 'none',
      display: 'flex',
      gap: '20px',
      margin: 0,
      padding: 0,
    },
    li: {
      cursor: 'pointer',
      fontFamily: 'Arial, sans-serif',
      color: 'var(--marrom-escuro)',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      cursor: 'pointer',
    },
    mobileMenu: {
      display: menuOpen ? 'block' : 'none',
      position: 'absolute',
      top: '60px',
      right: '20px',
      backgroundColor: 'var(--bg-color)',
      boxShadow: '0 2px 10px var(--color-shadow)',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 1001,
    },
    mobileUl: {
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      margin: 0,
      padding: 0,
    },
  };

  return (
    <header style={styles.header} ref={headerRef}>
      <div style={styles.logoContainer}>
        <img src={`${process.env.PUBLIC_URL}/GourmetOn-logo.png`} alt="Logo" style={styles.logo} />
      </div>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li} onClick={() => scrollToSection(sobreRef)}>Sobre</li>
          <li style={styles.li} onClick={() => scrollToSection(funcionalidadesRef)}>Funcionalidades</li>
          <li style={styles.li} onClick={() => scrollToSection(depoimentosRef)}>Depoimentos</li>
          <li style={styles.li} onClick={() => scrollToSection(contatoRef)}>Contato</li>
        </ul>
      </nav>
      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--marrom-escuro)', margin: '5px 0' }}></div>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--marrom-escuro)', margin: '5px 0' }}></div>
        <div style={{ width: '25px', height: '3px', backgroundColor: 'var(--marrom-escuro)', margin: '5px 0' }}></div>
      </div>
      <div style={styles.mobileMenu}>
        <ul style={styles.mobileUl}>
          <li style={styles.li} onClick={() => scrollToSection(sobreRef)}>Sobre</li>
          <li style={styles.li} onClick={() => scrollToSection(funcionalidadesRef)}>Funcionalidades</li>
          <li style={styles.li} onClick={() => scrollToSection(depoimentosRef)}>Depoimentos</li>
          <li style={styles.li} onClick={() => scrollToSection(contatoRef)}>Contato</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
