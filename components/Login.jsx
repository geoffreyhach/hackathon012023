import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Button, Stack, Typography } from "@mui/material";

function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Stack alignItems="flex-end">
          <Typography variant="overline">{session.user.name}</Typography>
          <Stack direction="row" alignItems="center" gap={2}>
            <Button variant="outlined" onClick={() => signOut()}>
              Sign out
            </Button>
            <Button variant="contained">
              <Avatar
                alt={session.user.name}
                src={session.user.image}
                sx={{ width: 24, height: 24, marginRight: 2 }}
              />{" "}
              {!session?.user.isAdmin && <Link href="admin">Mon compte</Link>}
              {session?.user.isAdmin && <Link href="admin">Espace admin</Link>}
            </Button>
          </Stack>
        </Stack>
      </>
    );
  }
  return (
    <>
      <Button variant="contained" onClick={() => signIn()}>
        <PersonIcon /> Sign in
      </Button>
    </>
  );
}

export default Login;
