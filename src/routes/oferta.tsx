import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/oferta")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
