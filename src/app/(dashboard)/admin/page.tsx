import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import AdminMenu from "@/components/menuAdmin/AdminMenu"; 


const Page = async () => {
  const session = await getServerSession(authOptions);
  // Se l'utente è verificato, allora fai il return della admin page o area personale
  if (session?.user) {
    return (
      <main className="flex min-h-screen flex-col p-5 gap-3">
        <div className="bg-slate-500 p-5 rounded-sm">
          <h2 className="text-2xl">
            Admin page - welcome back {session?.user.username || session.user.name}
          </h2>
        </div>
        <div>
          <AdminMenu />
        </div>
      </main>
    );
  }
  // Altrimenti mostra questo messaggio
  return <h2 className="text-2xl">Per favore loggati per vedere questa pagina</h2>;
};

export default Page;
