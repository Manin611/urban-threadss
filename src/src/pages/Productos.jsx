import ProductCard from '../components/ProductCard'
import { productosData } from '../helpers/productosData'
import styles from './Productos.module.css'

function Productos() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>NUESTRA COLECCIÓN</h1>
        <p className={styles.subtitle}>Estilo urbano para cada ocasión</p>
      </div>

      <div className={styles.grid}>
        {productosData.map((producto) => (
          <ProductCard
            key={producto.id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            icono={producto.icono}
          />
        ))}
      </div>
    </main>
  )
}

export default Productos
