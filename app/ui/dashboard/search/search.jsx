"use client"

import {
  useRouter,
  usePathname,
  useSearchParams
} from "next/navigation"
import { MdSearch } from "react-icons/md"
import styles from "./search.module.css"

export default function Search({ placeholder }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", 1)

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value)
    } else {
      params.delete("q")
    }
    router.replace(`${pathname}?${params}`)
  }

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
      // onChange={handleSearch}
      />
    </div>
  )
}
