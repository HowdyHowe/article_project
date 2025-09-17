import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;
  const role = (await cookieStore).get("role")?.value;

  try {
    if (!token) {
      (await cookieStore).delete("accessToken");
      (await cookieStore).delete("role");
      redirect("/login");
    }
    if (role === "User") {
      redirect("/dashboard");
    }
    if (role === "Admin") {
      redirect("/admin");
    }
  } catch (err) {
    console.error("Routing Error: ", err)
  }

  return (
    <div>
      loading...
    </div>
  );
}
