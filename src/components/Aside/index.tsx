import style from './aside.module.scss'
export function Aside(){
  return(
    <>
         <aside className={style.aside}>
        <h3>Categorias</h3>
        <div className={style.category}>
          <a href='#'>Chá de limão</a>
          <a href='#'>Chá de Camomila</a>
          <a href='#'>Chá de Erva cidreira</a>
          <a href='#'>Chá de Hibisco</a>
          <a href='#'>Chá de Mate</a>
          <a href='#'>Chá de Canela</a>
        </div>
      </aside>
    </>
  )
}