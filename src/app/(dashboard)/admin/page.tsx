import { authOptions } from "@/lib/auth" 
import { getServerSession } from "next-auth"

const page = async () => {
  const session = await getServerSession(authOptions);
  if(session?.user){
    return <h2 className="text-2xl"> admin page - welcome back {session?.user.username || session.user.name } </h2>
  }
 return (
  <h2 className="text-2xl">per favore loggati per vedere questa pagina</h2>
 )
}

export default page