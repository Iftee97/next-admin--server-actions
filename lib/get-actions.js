import { Product, User } from "./models"
import { connectToDB } from "./connectToDb"

// every function in this file is for get actions

export const fetchUsers = async (q, page) => {
  // console.log("user query: >>>>>>>", q)
  const regex = new RegExp(q, "i") // this is for making the query case insensitive
  const ITEM_PER_PAGE = 5
  try {
    connectToDB()
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .sort({ createdAt: -1 }) // -1 is for descending order, newest to oldest
    return { count, users }
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch users!")
  }
}

export const fetchUser = async (id) => {
  // console.log("user id: >>>>>>>", id)
  try {
    connectToDB()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch user!")
  }
}

export const fetchProducts = async (q, page) => {
  // console.log("product query: >>>>>>>", q)
  const regex = new RegExp(q, "i")
  const ITEM_PER_PAGE = 5
  try {
    connectToDB()
    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1))
      .sort({ createdAt: -1 }) // -1 is for descending order, newest to oldest
    return { count, products }
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch products!")
  }
}

export const fetchProduct = async (id) => {
  // console.log("product id: >>>>>>>", id)
  try {
    connectToDB()
    const product = await Product.findById(id)
    return product
  } catch (err) {
    console.log(err)
    throw new Error("Failed to fetch product!")
  }
}