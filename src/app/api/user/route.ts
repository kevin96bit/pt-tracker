import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

// definisco uno schema per la validazione dell'input

const userSchema = z.object({
  username: z.string().min(1, "l'username è richiesto").max(100),
  email: z.string().min(1, "Email richiesta").email("Email non valida"),
  password: z
    .string()
    .min(1, "Password richiesta")
    .min(8, "La password deve contenere almeno 8 caratteri"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = userSchema.parse(body);

    // controlla se l'email già esiste
    const utenteEsistenteEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (utenteEsistenteEmail) {
      return NextResponse.json(
        { user: null, message: "Questa email è già utilizzata" },
        { status: 409 }
      );
    }

    // controlla se l'username  già esiste
    const utenteEsistenteUsername = await db.user.findUnique({
      where: { username: username },
    });
    if (utenteEsistenteUsername) {
      return NextResponse.json(
        { user: null, message: "Questa username è già utilizzato" },
        { status: 409 }
      );
    }
    // Bcrypt
    const passwordProtetta = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: passwordProtetta,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "L'utente è stato creato con successo" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Qualcosa è andato sorto" },
      { status: 500 }
    );
  }
}
