// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.method, "api request");

  const method = req.method;

  switch (method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
      break;
    case "POST":
      res.status(200).json({ name: "John Doe" });
      break;
    default:
      break;
  }
}
