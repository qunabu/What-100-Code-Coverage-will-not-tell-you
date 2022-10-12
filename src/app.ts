import express from "express";
import { downloadAndConvert } from "./service";
import type { Currency } from "./service";
const app = express();
const port = 3000;

app.get("/convert/:from/:to/:amount", async (req, res) => {
  const { from, to, amount } = req.params;

  /*
  let result;
  try {
    result = await downloadAndConvert(
      from as Currency["code"],
      to as Currency["code"],
      Number(amount)
    );
  } catch (er) {
    return res.json({
      from,
      to,
      amount,
      result,
      errorCode: "convertingError",
      errorMessage: "amount in USD our or range",
    });
  }
  */

  const result = await downloadAndConvert(
    from as Currency["code"],
    to as Currency["code"],
    Number(amount)
  );

  if (result === -1) {
    return res.json({
      from,
      to,
      amount,
      result,
      errorCode: "outOfRange",
      errorMessage: "amount in USD out of range",
    });
  }

  return res.json({
    from,
    to,
    amount,
    result,
  });
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export { server };

export default app;
