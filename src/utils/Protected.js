import React from "react";
import { redirect, Outlet } from "react-router-dom";
import { requireAuth } from "./requireAuth";

export async function loader({ request }) {
  await requireAuth(request);
  return null;
}

export default function Protected() {
  return (
    <>
      <Outlet />
    </>
  );
}
