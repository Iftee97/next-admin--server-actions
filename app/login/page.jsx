import LoginForm from "../ui/login/login-form/login-form"
import styles from "@/app/ui/login/login.module.css"

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}
