import { NextResponse } from "next/server";

export default function middleware(req) {
  const cookieToken = req.cookies.get("token")?.value;
  const validUser = req.cookies.get("validUser")?.value;
  const permission = cookieToken && validUser ? true : false;
  const path = req.url;

  const home = "http://localhost:7000/";

  if (path.includes("/login")) {
    if (permission) {
      return NextResponse.redirect(`${home}`, path);
    } else {
      return NextResponse.next();
    }
  }
  if (path && permission) {
    if (permission) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(`${home}`, path);
    }
  }

  if (path == home) {
    if (permission) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(`${home}login`, path);
    }
  }
}
