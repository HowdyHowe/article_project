import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;
  const role = cookieStore.get("role")?.value;

  try {
    if (!token) {
      cookieStore.delete("accessToken");
      cookieStore.delete("role");
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

    cookieStore.delete("accessToken");
    cookieStore.delete("role");
    redirect("/login");
  }

  return (
    <div>
      loading...
    </div>
  );
}
