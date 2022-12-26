import styles from './Card.module.scss'

function Card (props) {
  return (
    <div className={styles.card}>
      <div className="card">
        <a href={props.link}>
          <h5 className="text-center">
            <img width={133} src={props.img} alt="" />
            <div>{props.title}</div>
            <button className={styles.button}>
              <a href={props.link}>Узнать больше</a>
            </button>
          </h5>
        </a>
      </div>
    </div>
  )
}

export default Card
