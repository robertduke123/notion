import styles from './Spacer.module.css'

type SpacerProps = {
    handleClick(): void
    showHint: boolean
}

const Spacer = ({handleClick, showHint}: SpacerProps) => {
  return (
    <div className={styles.spacer} onClick={handleClick}>
      {showHint && 'Click to create the first paragraph.'}
    </div>
  )
}

export default Spacer
