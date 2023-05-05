import type { Dispatch, FC, SetStateAction } from 'react'

import { Button } from '../components/Button'

import styles from './Navigation.module.css'

type Props = {
  page: number
  setPage: Dispatch<SetStateAction<number>>
}

export const Navigation: FC<Props> = ({ page, setPage }) => {
  const handleNextPage = () => {
    setPage((prev) => ++prev)
  }

  const handlePrevPage = () => {
    if (!(page - 1 < 1)) {
      setPage((prev) => --prev)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Button
        label="Previous"
        type="button"
        onClick={handlePrevPage}
        isDisabled={page < 2}
      />
      <Button label="Next" type="button" onClick={handleNextPage} />
    </div>
  )
}
