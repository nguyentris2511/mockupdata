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
        transSuccessAmount: 20_000,
        transSuccessCount: 2,
        netRevenueAmount: 17_000,
        costAmount: 1_000,
        payableAmount: 2_000,
        inPendingAmount: 5_000,
        inPendingCount: 1
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
        transSuccessAmount: 10_000_000,
        transSuccessCount: 20,
        netRevenueAmount: 9_970_000,
        costAmount: 10_000,
        payableAmount: 20_000,
        inPendingAmount: 1_500_000,
        inPendingCount: 11
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