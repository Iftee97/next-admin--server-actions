import Link from "next/link"
import Image from "next/image"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import styles from "@/app/ui/dashboard/products/products.module.css"
import { fetchProducts } from "@/lib/data"
import { deleteProduct } from "@/lib/actions"

export const metadata = {
  title: "Products | Next Admin",
  description: "Products page",
}

export default async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || ""
  const page = searchParams?.page || 1
  const { products, count } = await fetchProducts(q, page)
  // console.log({ products, count })

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
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src={product?.image || "/noproduct.jpg"}
                    alt="product image"
                    width={40}
                    height={40}
                    className={styles.productImage}
                  />
                  <span>{product.title}</span>
                </div>
              </td>
              <td>{product.desc.substring(0, 50)}...</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
