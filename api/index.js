/**
 * /api?type=a   → JSON “type a”
 * /api?type=b   → JSON “type b”
 * /api?type=??? → 404 JSON
 */
export default function handler(req, res) {
  const { type = 'a' } = req.query;          // mặc định 'a' nếu không truyền

  /** ------- Dữ liệu mock ------- */
  const responses = {
    a: {
      status: 0,
      message: 'Thành công',
      data: {
        fromDate: '2025/01/05',
        toDate: '2025/01/06',
        storeName: ['BÚN CANH', 'BÁNH CANH', 'BÁNH HẸ'],
        merchantName: 'Capu capu',
        successTransAmount: 20_000,
        successTransCount: 2,
        netRevenue: 17_000,
        feeAmount: 1_000,
        totalPayableFee: 2_000,
        pendingTransAmount: 5_000,
        pendingTransCount: 1
      }
    },

    b: {
      status: 0,
      message: 'Thành công',
      data: {
        fromDate: '2025/01/07',
        toDate: '2025/01/08',
        storeName: ['BÚN CANH', 'BÁNH CANH', 'BÁNH HẸ'],
        merchantName: 'Capu capu',
        successTransAmount: 10_000_000,
        successTransCount: 20,
        netRevenue: 9_970_000,
        feeAmount: 10_000,
        totalPayableFee: 20_000,
        pendingTransAmount: 1_500_000,
        pendingTransCount: 11
      }
    }
  };
  /** -------------------------------- */

  const payload = responses[type];

  if (!payload) {
    res.status(404).json({
      status: 404,
      message: `Type '${type}' not found`,
      data: null
    });
    return;
  }

  res.setHeader('Cache-Control', 'no-store'); // tắt cache
  res.status(200).json(payload);
}