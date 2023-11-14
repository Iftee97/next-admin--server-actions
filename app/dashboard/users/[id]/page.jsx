import Image from "next/image"
import { fetchUser } from "@/lib/get-actions"
import { updateUser } from "@/lib/server-actions"
import styles from "@/app/ui/dashboard/users/single-user/single-user.module.css"

export const metadata = {
  title: "Single User | Next Admin",
  description: "Users page",
}

export default async function SingleUserPage({ params }) {
  const { id } = params
  const user = await fetchUser(id)

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/noavatar.png"
            alt="user avatar"
            fill
          />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input
            type="hidden"
            name="id"
            value={user.id}
          />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="super secret"
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
          />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder={user.address}
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <button type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  )
}
