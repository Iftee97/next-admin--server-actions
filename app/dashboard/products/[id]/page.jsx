import Image from "next/image"
import { fetchProduct } from "@/lib/data"
import { updateProduct } from "@/lib/actions"
import styles from "@/app/ui/dashboard/products/single-product/single-product.module.css"

export const metadata = {
  title: "Single Products | Next Admin",
  description: "Products page",
}

export default async function SingleProductPage({ params }) {
  const { id } = params
  const product = await fetchProduct(id)
  console.log("product: >>>>>>", product)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noproduct.jpg"
            alt="no product"
            fill={true}
          />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input
            type="hidden"
            name="id"
            value={product.id}
          />
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
          // value={product.title}
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
          // value={product.price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
          // value={product.stock}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          // value={product.color || ""}
          />
          <label>Size</label>
          <input
            type="text"
            name="size"
            placeholder={product.size || "size"}
          // value={product.size || ""}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">
              Kitchen
            </option>
            <option value="phone">
              Phone
            </option>
            <option value="computer">
              Computer
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          // value={product.desc}
          />
          <button type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
