
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export default async function Home(req: NextRequest) {
  // try {
  //   const token = req.cookies.get("accessToken");
  //   const role = req.cookies.get("role");

  //   console.log(role)

  //   if (!token) {
  //     redirect("/login");
  //   }
  //   if (role === "User") {
  //     redirect("/dashboard");
  //   }
  //   if (role === "Admin") {
  //     redirect("/admin");
  //   }
  // } catch (err) {
  //   console.error("Routing Error: ", err)

  //   redirect("/login");
  // }
  // redirect("/login")

  return null;
}
