import { useNavigate } from 'react-router-dom'
import styles from './Inicio.module.css'

function Inicio() {
  const navigate = useNavigate()

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            ESTILO URBANO<br />
            <span className={styles.heroAccent}>REDEFINIDO</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>
          <button
            className={styles.heroBtn}
            onClick={() => navigate('/productos')}
          >
            EXPLORAR COLECCIÓN
          </button>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fas fa-wand-magic-sparkles"></i>
            </div>
            <h3 className={styles.featureTitle}>DISEÑO ÚNICO</h3>
            <p className={styles.featureText}>
              Piezas exclusivas con estética urbana y minimalista
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fas fa-circle-check"></i>
            </div>
            <h3 className={styles.featureTitle}>CALIDAD PREMIUM</h3>
            <p className={styles.featureText}>
              Materiales de alta calidad para máxima durabilidad
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className={styles.featureTitle}>ENVÍO RÁPIDO</h3>
            <p className={styles.featureText}>
              Entrega express en 24-48 horas
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Inicio
