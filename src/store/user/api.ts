import { siteUrl } from "../../utils";

const AUTH_URL = `${siteUrl}/api/v1/login`;

export const login = (body: string) =>
  fetch(AUTH_URL, {
    method: "POST",
    body
  });
