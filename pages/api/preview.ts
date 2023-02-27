import type { NextApiRequest, NextApiResponse } from "next";

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({}); // set it as an empty object
  res.writeHead(307, { Location: "/" }); // redirect user to home page
  res.end();
}
