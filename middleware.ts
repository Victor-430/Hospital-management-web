import { auth } from "@/auth";

// export { auth as middleware } from "@/auth";

export default auth((req) => {
  // Add any custom middleware logic here
  console.log("Route:", req.nextUrl.pathname);
  console.log("User:", req.auth?.user);
});
