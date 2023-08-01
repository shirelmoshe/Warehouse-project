const sampleOrders = [
    {
      orderId: 1,
      customerName: "John Doe",
      orderDate: "2023-07-30",
      status: "Shipped",
      orderTotal: 120.50,
      shippingAddress: "123 Main St, City, State, Zip",
      paymentStatus: "Paid",
      trackingNumber: "ABC123XYZ",
      notes: "Order shipped via Express Shipping",
      paymentMethod: "Credit Card",
      orderItems: "Product A, Product B, Product C",
      invoice: "https://example.com/invoice/123",
    },
    {
      orderId: 2,
      customerName: "Jane Smith",
      orderDate: "2023-07-28",
      status: "Delivered",
      orderTotal: 85.75,
      shippingAddress: "456 Elm St, City, State, Zip",
      paymentStatus: "Paid",
      trackingNumber: "XYZ789ABC",
      notes: "Order delivered to the front desk",
      paymentMethod: "PayPal",
      orderItems: "Product X, Product Y",
      invoice: "https://example.com/invoice/456",
    },
    {
      orderId: 3,
      customerName: "Bob Johnson",
      orderDate: "2023-07-25",
      status: "Pending",
      orderTotal: 50.20,
      shippingAddress: "789 Oak St, City, State, Zip",
      paymentStatus: "Pending",
      trackingNumber: "",
      notes: "Payment confirmation pending",
      paymentMethod: "Debit Card",
      orderItems: "Product Z",
      invoice: "https://example.com/invoice/789",
    },
 
  ];
  
  export { sampleOrders };
  