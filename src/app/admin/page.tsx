
import { redirect } from "next/navigation";

export default async function Admin() {

  redirect("/admin/article")

  return (
    <div>
      loading...
    </div>
  );
}
