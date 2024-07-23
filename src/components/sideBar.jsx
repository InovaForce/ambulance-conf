
import styles from '@/styles/components/sideBar.module.scss'
const SideBar = ({generally}) => {
  return (
    <div className={styles.sideBar}>
      <h2 >Your Ambulance</h2>
      <h4 className={styles.total}>Price Summary :{generally.medical.mainStretcher.price}</h4>
    </div>
  )
}

export default SideBar
