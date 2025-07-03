export default function handler(req, res) {
  const { type = 'default' } = req.query;
  const data = {
    a: { msg: 'Hello A', status: 0 },
    b: { msg: 'Hello B', status: 1 },
    default: { msg: 'Hello default', status: 2 }
  }[type] ?? { msg: 'Not found', status: 404 };

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(data);
}