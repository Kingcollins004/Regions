const financialData = [
  {
    Account: 123456,
    Name: "John Doe",
    ReferenceNo: "ABC123",
    Date: "2023-11-04",
    Description: "Payment for Services",
    Debit: 500.00,
    Credit: 0.00,
  },
  {
    Account: 789012,
    Name: "Jane Smith",
    ReferenceNo: "XYZ789",
    Date: "2023-11-05",
    Description: "Product Purchase",
    Debit: 0.00,
    Credit: 300.00,
  },
  {
    Account: 456789,
    Name: "Bob Johnson",
    ReferenceNo: "DEF456",
    Date: "2023-11-06",
    Description: "Rent Payment",
    Debit: 800.00,
    Credit: 0.00,
  },
  {
    Account: 987654,
    Name: "Alice Brown",
    ReferenceNo: "GHI789",
    Date: "2023-11-07",
    Description: "Consultation Fee",
    Debit: 0.00,
    Credit: 700.00,
  },
  {
    Account: 654321,
    Name: "Eva Wilson",
    ReferenceNo: "JKL012",
    Date: "2023-11-08",
    Description: "Office Supplies",
    Debit: 200.00,
    Credit: 0.00,
  },
  {
    Account: 123789,
    Name: "David Lee",
    ReferenceNo: "MNO345",
    Date: "2023-11-09",
    Description: "Salary Deposit",
    Debit: 0.00,
    Credit: 1500.00,
  },
  {
    Account: 456123,
    Name: "Sara Davis",
    ReferenceNo: "PQR678",
    Date: "2023-11-10",
    Description: "Advertising Expense",
    Debit: 300.00,
    Credit: 0.00,
  },
  {
    Account: 789456,
    Name: "Michael Johnson",
    ReferenceNo: "STU901",
    Date: "2023-11-11",
    Description: "Loan Repayment",
    Debit: 0.00,
    Credit: 1000.00,
  },
  {
    Account: 321654,
    Name: "Laura White",
    ReferenceNo: "VWX234",
    Date: "2023-11-12",
    Description: "Travel Expenses",
    Debit: 600.00,
    Credit: 0.00,
  },
  {
    Account: 654987,
    Name: "Chris Taylor",
    ReferenceNo: "YZA567",
    Date: "2023-11-13",
    Description: "Dividend Income",
    Debit: 0.00,
    Credit: 120.00,
  },
  {
    Account: 111222,
    Name: "Emily Davis",
    ReferenceNo: "ABC789",
    Date: "2023-11-14",
    Description: "Consulting Fee",
    Debit: 0.00,
    Credit: 400.00,
  },
  {
    Account: 333444,
    Name: "Daniel Johnson",
    ReferenceNo: "XYZ456",
    Date: "2023-11-15",
    Description: "Product Sale",
    Debit: 0.00,
    Credit: 700.00,
  },
  {
    Account: 555666,
    Name: "Olivia White",
    ReferenceNo: "DEF123",
    Date: "2023-11-16",
    Description: "Expense Reimbursement",
    Debit: 200.00,
    Credit: 0.00,
  },
  {
    Account: 777888,
    Name: "Matthew Miller",
    ReferenceNo: "GHI456",
    Date: "2023-11-17",
    Description: "Equipment Purchase",
    Debit: 1200.00,
    Credit: 0.00,
  },
  {
    Account: 999000,
    Name: "Sophia Anderson",
    ReferenceNo: "JKL789",
    Date: "2023-11-18",
    Description: "Freelance Income",
    Debit: 0.00,
    Credit: 600.00,
  },
  // Additional transactions...
  {
    Account: 111333,
    Name: "William Brown",
    ReferenceNo: "MNO012",
    Date: "2023-11-19",
    Description: "Utility Bill Payment",
    Debit: 450.00,
    Credit: 0.00,
  },
  {
    Account: 444555,
    Name: "Emma Taylor",
    ReferenceNo: "PQR345",
    Date: "2023-11-20",
    Description: "Stock Purchase",
    Debit: 0.00,
    Credit: 800.00,
  },
  {
    Account: 666777,
    Name: "James Wilson",
    ReferenceNo: "STU678",
    Date: "2023-11-21",
    Description: "Marketing Expenses",
    Debit: 300.00,
    Credit: 0.00,
  },
  {
    Account: 888999,
    Name: "Ava Johnson",
    ReferenceNo: "VWX901",
    Date: "2023-11-22",
    Description: "Client Payment",
    Debit: 0.00,
    Credit: 1000.00,
  },
  {
    Account: 222333,
    Name: "Noah Davis",
    ReferenceNo: "YZA234",
    Date: "2023-11-23",
    Description: "Training Fee",
    Debit: 0.00,
    Credit: 350.00,
  },
  {
    Account: 555444,
    Name: "Grace White",
    ReferenceNo: "BCD567",
    Date: "2023-11-24",
    Description: "Rent Expense",
    Debit: 700.00,
    Credit: 0.00,
  },
  {
    Account: 777666,
    Name: "Ethan Miller",
    ReferenceNo: "EFG890",
    Date: "2023-11-25",
    Description: "Website Development",
    Debit: 0.00,
    Credit: 900.00,
  },
  {
    Account: 999888,
    Name: "Isabella Anderson",
    ReferenceNo: "HIJ123",
    Date: "2023-11-26",
    Description: "Insurance Premium",
    Debit: 550.00,
    Credit: 0.00,
  },
  {
    Account: 333222,
    Name: "Liam Brown",
    ReferenceNo: "KLM456",
    Date: "2023-11-27",
    Description: "Conference Registration",
    Debit: 0.00,
    Credit: 250.00,
  },
  {
    Account: 666999,
    Name: "Sophie Taylor",
    ReferenceNo: "NOP789",
    Date: "2023-11-28",
    Description: "Software Subscription",
    Debit: 150.00,
    Credit: 0.00,
  },
  {
    Account: 888111,
    Name: "Jackson Wilson",
    ReferenceNo: "QRS012",
    Date: "2023-11-29",
    Description: "Repair Expenses",
    Debit: 400.00,
    Credit: 0.00,
  },
  {
    Account: 222444,
    Name: "Chloe Johnson",
    ReferenceNo: "TUV345",
    Date: "2023-11-30",
    Description: "Royalty Income",
    Debit: 0.00,
    Credit: 200.00,
  },
  // Add more objects for additional transactions
];

export default financialData;