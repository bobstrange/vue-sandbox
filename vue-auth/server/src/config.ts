import "dotenv/config";

export const PORT = Number(process.env.PORT || "8080");
const secretKey = process.env.SECRET_KEY;
if (!secretKey) {
  throw new Error("SECRET_KEY must be defined");
}
export const SECRET_KEY = secretKey;
