import Express from "express"

export const app = Express()

app.get("/", (_, res) => {
  res.json({ message: "Hi there" })
})
