import Head from 'next/head';
import styles from '../styles/styles.module.css'; // Archivo CSS externo

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
      </Head>

      <div className={styles.contactBar}>
        {/* Contenido de la barra de contactos */}
        <ul>
          <li><a href="tel:+123456789"><i className="fa fa-phone" aria-hidden="true"></i>123456789</a></li>
          <li><a href="mailto:info@example.com"><i className="fa fa-envelope" aria-hidden="true"></i>info@example.com</a></li>
        </ul>
      </div>

      <header className={styles.header}>
        <h1>Logo</h1>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/products">Productos</a></li>
            <li><a href="/projects">Proyectos</a></li>
            <li><a href="/about">Nosotros</a></li>
          </ul>
        </nav>
      </header>

      <div className={styles.banner}>
        <img src="https://ww2.muniquilicura.cl/wp-content/uploads/2023/06/banner-calendario-licencia-conducir-02-1024x339.jpg" alt="Banner de Nosotros" />
      </div>

      <div className={styles.blog}>
        <div className={styles.blogContent}>
          <h2>Título del Blog</h2>
          <p>Este es el contenido del blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, ligula vitae sagittis aliquam, eros quam convallis magna, a ullamcorper sapien sem at elit.</p>
        </div>
        <div className={styles.blogImage}>
          <img src="https://i.pinimg.com/736x/34/cb/b9/34cbb9329d194cae02d75c7337bd19d4.jpg" alt="Imagen del Blog" />
        </div>
      </div>

      <div className={styles.blog}>
        <div className={styles.blogContent}>
          <div className={styles.bloglogo}>
            <img src="https://companieslogo.com/img/orig/NDSN-d3b6cedf.png?t=1659676988" alt="logo pequeño de la empresa" />
          </div>
          <h2>Título del Blog</h2>
          <p>Este es el contenido del blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, ligula vitae sagittis aliquam, eros quam convallis magna, a ullamcorper sapien sem at elit.</p>
          <a className="link-button" href="../index" >Texto del botón</a>        </div>
        <div className={styles.blogImage}>
          <img src="https://i.pinimg.com/736x/34/cb/b9/34cbb9329d194cae02d75c7337bd19d4.jpg" alt="Imagen del Blog" />
        </div>
      </div>

      <div className={styles.blog}>
        <div className={styles.blogImage}>
          <img src="https://i.pinimg.com/736x/34/cb/b9/34cbb9329d194cae02d75c7337bd19d4.jpg" alt="Imagen del Blog" />
        </div>
        <div className={styles.blogContent}>
          <h2>Siguenos en Linkedin</h2>
          <p>¡Entérate de nuestras noticias y de nuestra actividad!</p>
        </div>
      </div>

      <div className={styles.barracontenido}>
        <h2>Ubicación</h2>
        <p>Texto o contenido aquí</p>
      </div>

      <footer className={styles.footer}>
        {/* Contenido del footer */}
        <p>Derechos de autor &copy; 2022 - Mi sitio web</p>
      </footer>
    </div>
  );
}
