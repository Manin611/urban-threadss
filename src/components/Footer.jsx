import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.brand}>URBAN THREADS</h3>
            <p className={styles.tagline}>
              Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
            </p>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>ENLACES</h4>
            <ul className={styles.linkList}>
              <li><NavLink to="/">Inicio</NavLink></li>
              <li><NavLink to="/productos">Productos</NavLink></li>
              <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>AYUDA</h4>
            <ul className={styles.linkList}>
              <li><a href="#">Guía de tallas</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>SÍGUENOS</h4>
            <div className={styles.socials}>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>
        <p className={styles.copy}>© 2024 Urban Threads. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
