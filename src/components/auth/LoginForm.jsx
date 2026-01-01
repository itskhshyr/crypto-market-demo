"use client";
import styles from "./LoginForm.module.css";
import Image from "next/image";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Buttons/Button";
import Link from "next/link";
import AuthHeader from "./AuthHeader";
import AuthLabel from "./AuthLabel";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("[LoginForm] form submitted:", form);
    setLoading(true);
    setError("");
    setTimeout(() => {
      router.push("/");
      setLoading(false);
    }, 1000);
  };

  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <div className={styles.loginContainerLeftSide}>
        <div className={styles.loginForm}>
          <div className="d-flex mb-5 justify-content-center d-md-none">
            <Image
              src="/images/crypto.png"
              width={64}
              height={64}
              alt="crypto-logo"
            />
          </div>
          <AuthHeader
            title="Login"
            content="Enter your email below to login to your account"
          />
          <div className="mt-4">
            <AuthLabel title="Email" />
            <Input
              type="text"
              placeholder="m@example.com"
              name="email"
              value={form.email}
              handleChange={handleChange}
            />
          </div>
          <div className="d-flex flex-column mt-4">
            <AuthLabel title="Password" />
            <div className={styles.inputWrapper}>
              <Input
                type={show ? "text" : "password"}
                name="password"
                value={form.password}
                handleChange={handleChange}
              />
              <span className={styles.eyeIcon} onClick={() => setShow(!show)}>
                {show ? (
                  <Image
                    src="/images/icons/EyeClose.svg"
                    alt="icon"
                    width={16}
                    height={16}
                  />
                ) : (
                  <Image
                    alt="icon"
                    src="/images/icons/Eye.svg"
                    width={16}
                    height={16}
                  />
                )}
              </span>
            </div>
            <div style={{ color: "#EF4444" }} className="mt-2 ps-1">
              {error && <p className={styles.error}>{error}</p>}
            </div>

            <div className="mt-4">
              <Button loading={loading} type="submit" content="Login" />
            </div>
            <div className="mt-4 text-center">
              <span className={styles.loginFormFooterContent}>
                Don’t have an account?
              </span>
              &nbsp;
              <Link href="/signup" className={styles.loginFormLinkText}>
                &nbsp;Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.loginContainerRightSide}>
        <div className={styles.brandContainer}>
          <Image
            src="/images/crypto.png"
            alt="crypto-logo"
            width={250}
            height={250}
            priority={true}
          />
        </div>
      </div>
    </form>
  );
}
