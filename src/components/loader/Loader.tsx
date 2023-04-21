import styles from './loader.module.scss'

const Loader = () => {

  return (
    <section className={styles['loader-container']}>
      <div className={styles.loader}></div>
    </section>
  )
}

export default Loader