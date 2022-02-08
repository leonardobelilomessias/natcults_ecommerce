import style from './footer.module.scss'
export function Footer(){
return(
  <>
  <footer className={style.footer}>
    <div className={style.first}>
      <h1>Natcults</h1>

      <div className={style.socialMidia}>
        <h3>Midias Sociais</h3>
        <div>
          <span>Instagram </span>
          <span> | </span>
          <span> Youtube</span>
        </div>

      </div>
      <div>
          <h4>Links uteis</h4>
          <ul>
            <li>Inicio</li>
            <li>Blog</li>
            <li>Sobre</li>
            <li>Contato</li>
          </ul>
        </div>
    </div>

    <div className={style.second}>
        <h4>Belilo | 2020</h4>
    </div>
  </footer>
  </>
)
}