import Link from "next/link"
import Image from "next/image"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import styles from "@/app/ui/dashboard/products/products.module.css"

export default function ProductsPage({ searchParams }) {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>
            Add New
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="no product image"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                ProductTitle
              </div>
            </td>
            <td>Product Description</td>
            <td>$9.99</td>
            <td>11.11.2023</td>
            <td>599</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/123">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination count={10} />
    </div>
  )
}
