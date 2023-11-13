import { addProduct } from "@/lib/actions"
import styles from "@/app/ui/dashboard/products/add-product/add-product.module.css"

export const metadata = {
  title: "Add Products | Next Admin",
  description: "Products page",
}

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select name="cat" id="cat">
          <option value="general">
            Choose a Category
          </option>
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
        <input
          type="number"
          placeholder="price"
          name="price"
          required
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
        />
        <input
          type="text"
          placeholder="color"
          name="color"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
