import styles from './ProductCard.module.css'

function ProductCard({ nombre, descripcion, precio, icono }) {
  const handleAnadir = () => {
    console.log(`Producto añadido: ${nombre} - €${precio}`)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imgPlaceholder}>
        <i className={`fas ${icono}`}></i>
      </div>
      <div className={styles.info}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <div className={styles.footer}>
          <span className={styles.precio}>€{precio}</span>
          <button className={styles.btn} onClick={handleAnadir}>
            AÑADIR
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
