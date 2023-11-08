import Image from "next/image"
import styles from "@/app/ui/dashboard/products/single-product/single-product.module.css"

export default function SingleProductPage({ params }) {
  const { id } = params

  const product = {
    id: id,
    title: "Product",
    price: 100,
    stock: 10,
    color: "red",
    size: "XL",
    cat: "kitchen",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?",
  }

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
        <form className={styles.form}>
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
          />
          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
          />
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
          />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">
              Kitchen
            </option>
            <option value="computers">
              Computers
            </option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          />
          <button type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
