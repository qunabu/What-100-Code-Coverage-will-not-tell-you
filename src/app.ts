import express from "express";
import { downloadAndConvert } from "./service";
import type { Currency } from "./service";
const app = express();
const port = 3000;

app.get("/convert/:from/:to/:amount", async (req, res) => {
  const { from, to, amount } = req.params;
  const result = await downloadAndConvert(
    from as Currency["code"],
    to as Currency["code"],
    Number(amount)
  );
  const response = {
    from,
    to,
    amount,
    result,
  };
  res.json(response);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { server };

export default app;
