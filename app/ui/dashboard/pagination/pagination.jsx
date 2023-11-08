"use client"

import {
  useRouter,
  usePathname,
  useSearchParams
} from "next/navigation"
import styles from "./pagination.module.css"

export default function Pagination({ count }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = searchParams.get("page") || 1

  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1)
    router.replace(`${pathname}?${params}`)
  }

  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  )
}
