export default function handler(req, res) {
  const { type = 'a' } = req.query;

    const jsonStringE = `{
    "status_code": 200,
    "message": "Success",
    "data": {
        "headerCta": {
            "ctaType": "ICON",
            "actions": [
                {
                    "action_type": "REDIRECT",
                    "ref_id": "merchant_financia_assistant"
                }
            ]
        },
        "icon": "https://static.momocdn.net/app/app/DTMM/home_store_icon.png",
        "title": "Cửa hàng của bạn",
        "itemData": [
            {
                "itemId": "",
                "itemName": null,
                "template": null,
                "type": "information",
                "description": "Doanh thu hôm nay",
                "backgroundImage": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_note_revenue.png",
                "items": null,
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "merchant_revenue_trend"
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_add_transaction",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_add_transaction"
                },
                "titleInformation": {
                    "icon": null,
                    "content": "20.000đ",
                    "color": "#ea1392"
                }
            },
            {
                "itemId": "",
                "itemName": null,
                "template": null,
                "type": "information",
                "description": "Giao dịch hôm nay",
                "backgroundImage": "https://static.momocdn.net/app/app/DTMM/trans_bg.png",
                "items": null,
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "transactions_merchant_template"
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_add_transaction",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_add_transaction"
                },
                "titleInformation": {
                    "icon": null,
                    "content": "80",
                    "color": "#000000"
                },
                "quantityLabel": {
                    "icon": null,
                    "content": "Kiểm tra giao dịch",
                    "color": "#EB2F96"
                }
            },
            {
                "itemId": "",
                "itemName": "TTTC_CTA",
                "template": null,
                "type": "information",
                "description": "Nhìn lại doanh thu",
                "subDescription": null,
                "backgroundImage": "https://static.momocdn.net/app/app/DTMM/look_back_revenue_bg.png",
                "quantityLabel": null,
                "items": null,
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "merchant_financia_assistant",
                            "params": {
                                "targetRef": null
                            }
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_add_transaction",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_add_transaction"
                },
                "titleInformation": {
                    "icon": null,
                    "content": "Tháng 8",
                    "color": "#ea1392"
                }
            }
        ]
    }
}`;
const jsObjectE = JSON.parse(jsonStringE);

const jsonStringF = `{
    "status_code": 200,
    "message": "Success",
    "data": {
        "status": 0
    }
}`;
const jsObjectF = JSON.parse(jsonStringF);

  const jsonStringC = `{
    "status_code": 200,
    "message": "Success",
    "data": {
        "headerCta": {
            "ctaType": "ICON",
            "actions": [
                {
                    "action_type": "REDIRECT",
                    "ref_id": "merchant_financia_assistant"
                }
            ]
        },
        "icon": "https://static.momocdn.net/app/img/icon_new3/expense.png",
        "title": "Trợ thủ tài chính",
        "itemData": [
            {
                "itemId": "",
                "itemName": null,
                "template": null,
                "type": "ranking",
                "description": "Phương thức nhận tiền - Tuần (21/07-22/07)",
                "subDescription": null,
                "backgroundImage": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_money_source_revenue.png",
                "quantityLabel": null,
                "items": [
                    {
                        "label": "Tiền mặt",
                        "value": "50%",
                        "icon": "https://static.momocdn.net/app/img/merchant_template/ic_cash_1.png"
                    },
                    {
                        "label": "Ngân hàng",
                        "value": "25%",
                        "icon": "https://static.momocdn.net/app/img/merchant_template/ic_bank_1.png"
                    },
                    {
                        "label": "Khác",
                        "value": "25%",
                        "icon": "https://static.momocdn.net/app/img/merchant_template/img_other_2.png"
                    }
                ],
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "merchant_financia_assistant"
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_financia_assistant",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_financia_assistant"
                },
                "titleInformation": null
            },
            {
                "itemId": "",
                "itemName": null,
                "template": null,
                "type": "information",
                "description": "Doanh thu tuần (22/07-22/07)",
                "subDescription": "So với cùng ký tuần trước.",
                "backgroundImage": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_default_revenue.png",
                "quantityLabel": {
                    "icon": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/ic_up_revenue.png",
                    "content": "60.000đ",
                    "color": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/ic_up_revenue.png"
                },
                "items": null,
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "merchant_add_transaction",
                            "params": {
                                "targetRef": null
                            }
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_add_transaction",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_add_transaction"
                },
                "titleInformation": {
                    "icon": null,
                    "content": "60.000đ",
                    "color": "#000000"
                }
            },
            {
                "itemId": "",
                "itemName": "TTTC_CTA",
                "template": null,
                "type": "information",
                "description": "Ghi chép GD",
                "subDescription": null,
                "backgroundImage": "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_note_revenue.png",
                "quantityLabel": null,
                "items": null,
                "card": {
                    "actions": [
                        {
                            "action_type": "REDIRECT",
                            "ref_id": "merchant_revenue_trend",
                            "params": {
                                "targetRef": null
                            }
                        }
                    ]
                },
                "trackify": {
                    "app_id": "vn.momo.tttc",
                    "service_name": "merchant_add_transaction",
                    "screen_name": "momo_home",
                    "component_name": "widget_native",
                    "component_type": "widget",
                    "block_name": "merchant_add_transaction"
                },
                "titleInformation": {
                    "icon": null,
                    "content": "Hôm nay chưa có ghi chép",
                    "color": "#000000"
                }
            }
        ]
    }
}`;
const jsObjectC = JSON.parse(jsonStringC);

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
    },
    c: jsObjectC,
    d: {
      status_code: 200,
      message: "Success",
      data: {
        headerCta: {
          ctaType: "ICON",
          actions: [
            {
              params: {},
              action_type: "REDIRECT",
              ref_id: "tttc"
            }
          ]
        },
        icon: "https://static.momocdn.net/app/img/icon_new3/expense.png",
        title: "Trợ thủ tài chính",
        trackify: {
          app_id: "vn.momo.tttc",
          service_name: "tttc",
          screen_name: "momo_home",
          component_name: "widget_native",
          component_type: "widget",
          button_name: "arrow"
        },
        itemData: [
          {
            itemId: "17f7e5f8",
            itemName: "TTTC_MONEY_SOURCE",
            template: "TTTC_1",
            type: "ranking",
            description: "Phương thức nhận tiền - Ngày (19/05)",
            backgroundImage: "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_money_source_revenue.png",
            card: {
              actions: [
                {
                  action_type: "REDIRECT",
                  ref_id: "tttc",
                  params: {
                    targetRef: "enter_trans_tttc"
                  }
                }
              ]
            },
            trackify: {
              app_id: "vn.momo.tttc",
              service_name: "tttc",
              screen_name: "momo_home",
              component_name: "widget_native",
              component_type: "widget",
              block_name: "TTTC_1"
            },
            items: [
              {
                label: "MOMO",
                value: "61%",
                icon: "https://static.momocdn.net/app/img/merchant_template/ic_momo_3.png"
              },
              {
                label: "BANK",
                value: "31%",
                icon: "https://static.momocdn.net/app/img/merchant_template/ic_bank_1.png"
              },
              {
                label: "CASH",
                value: "2%",
                icon: "https://static.momocdn.net/app/img/merchant_template/ic_cash_1.png"
              }
            ]
          },
          {
            itemId: "123",
            itemName: "TTTC_REVENUE",
            template: "TTTC_2",
            type: "information",
            description: "Doanh thu tháng (19/04-19/05)",
            titleInformation: {
              icon: "",
              content: "110.000.000đ",
              color: "#000000"
            },
            backgroundImage: "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_default_revenue.png",
            quantityLabel: {
              icon: "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/ic_down_revenue.png",
              content: "9.869.599",
              color: "#FF0000"
            },
            subDescription: "So với cùng kỳ tháng trước",
            card: {
              actions: [
                {
                  action_type: "REDIRECT",
                  ref_id: "tttc",
                  params: {
                    targetRef: "enter_trans_tttc"
                  }
                }
              ]
            },
            trackify: {
              app_id: "vn.momo.tttc",
              service_name: "tttc",
              screen_name: "momo_home",
              component_name: "widget_native",
              component_type: "widget",
              block_name: "TTTC_2"
            }
          },
          {
            itemId: "123",
            itemName: "TTTC_CTA",
            template: "TTTC_3",
            type: "information",
            description: "xem phần tích",
            titleInformation: {
              icon: "",
              content: "Xu hướng doanh thu",
              color: "#303233"
            },
            backgroundImage: "https://static.momocdn.net/files/bWVyY2hhbnR0ZW1wbGF0ZQ==/image/bg_revenue.png",
            quantityLabel: {
              icon: "",
              content: "",
              color: ""
            },
            card: {
              actions: [
                {
                  action_type: "REDIRECT",
                  ref_id: "tttc",
                  params: {
                    targetRef: "enter_trans_tttc"
                  }
                }
              ]
            },
            trackify: {
              app_id: "vn.momo.tttc",
              service_name: "tttc",
              screen_name: "momo_home",
              component_name: "widget_native",
              component_type: "widget",
              block_name: "TTTC_3"
            },
            items: []
          }
        ]
      }
    },
    e: jsObjectE,
    f: jsObjectF
  };

  const payload = responses[type];

  if (!payload) {
    res.status(404).json({
      status: 404,
      message: `Type '${type}' not found`,
      data: null
    });
    return;
  }

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json(payload);
}
