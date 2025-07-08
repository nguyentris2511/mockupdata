export default function handler(req, res) {
  const { type = 'a' } = req.query;

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
    c: {
      status_code: 200,
      message: "Success",
      data: {
        headerCta: {
          ctaType: "ICON",
          actions: [
            {
              params: {},
              actionType: "REDIRECT",
              featureCode: "tttc"
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
            backgroundImage: "https://static.momocdn.net/app/img/expense/Native_Home_MoMo/Image_BG_Top_Categories.jpg",
            card: {
              actions: [
                {
                  actionType: "REDIRECT",
                  featureCode: "tttc",
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
                icon: "https://static.momocdn.net/app/img/QLCT/TienNhaCua.png"
              },
              {
                label: "BANK",
                value: "31%",
                icon: "https://static.momocdn.net/app/img/QLCT/AnHangQuan.png"
              },
              {
                label: "CASH",
                value: "2%",
                icon: "https://static.momocdn.net/app/img/QLCT/TaxiXeOm.png"
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
            backgroundImage: "https://static.momocdn.net/app/img/expense/Native_Home_MoMo/Image_BG_Add.jpg",
            quantityLabel: {
              icon: "up_arrow",
              content: "9.869.599",
              color: "#FF0000"
            },
            subDescription: "So với cùng kỳ tháng trước",
            card: {
              actions: [
                {
                  actionType: "REDIRECT",
                  featureCode: "tttc",
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
            backgroundImage: "https://static.momocdn.net/app/img/expense/Native_Home_MoMo/Image_BG_Add.jpg",
            quantityLabel: {
              icon: "",
              content: "",
              color: ""
            },
            card: {
              actions: [
                {
                  actionType: "REDIRECT",
                  featureCode: "tttc",
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
    }
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
