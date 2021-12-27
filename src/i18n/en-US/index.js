// This is just an example,
// so you can safely delete all default props below

export default {
  siteTitle: 'Merchant Pay Manage',
  login: 'Sign In',
  username: 'Username',
  password: 'Password',
  cancel: 'Cancel',
  tips: 'Tips',
  usernameAndPasswordMustProvided: 'Username And Password Must Provided',
  usernameInvalid: 'Username Format Invalid',
  confirm: 'Confirm',
  loginFailed: 'Sign In Failed',
  navigationCaption: 'Navigation',
  operation: 'Operations',
  search: 'Search',
  add: 'Add',
  update: 'Update',
  success: 'Success',
  failed: 'Failed',
  duplicate: 'Data Duplicate',
  showDetail: 'Show Detail',
  detail: 'Detail',
  available: 'Available',
  unavailable: 'Unavailable',
  delete: 'Delete',
  deleteConfirm: 'Are You Sure to Delete?',
  dispatch: 'Dispatch',
  dispatchAccount: 'Dispatch Account',
  navigation: {
    order: 'Pay Order',
    orderCaption: 'Pay in orders, includes manual add balance order',
    payoutOrder: 'Payout Order',
    payoutCaption: 'Pay out orders, includes manual minus balance order',
    user: 'User',
    userCaption: 'User for background manage and role dispatch',
    authorize: 'Authorize',
    authorizeCaption: 'Role and Resource Dispatch Manage',
  },
  merchant: {
    id: 'Merchant ID',
    name: 'Merchant Name',
    balance: 'Available Balance',
    frozen: 'Frozen Balance',
    totalIncome: 'Total Income(With Fee)',
    totalRealIncome: 'Total Income',
    totalPayout: 'Total Payout(Without Fee)',
    totalRealPayout: 'Total Payout',
    payCallbackUrl: 'Pay in Callback Url',
    payoutCallbackUrl: 'Pay out Callback Url',
    redirectUrl: 'Redirect Url',
    secret: 'Secret Key',
    createTime: 'Create Time'
  },
  order: {
    id: 'trsaction ID',
    tradeId: 'Merchant Trade ID',
    amount: 'Amount',
    fee: 'Fee',
    payUser: 'Pay User',
    remark: 'Remark',
    payerName: 'Payer Name',
    payerMobile: 'Payer Mobile',
    payerVirtualAddress: 'Payer Virtual Address',
    state: 'State',
    notifyState: 'Notify State',
    createTime: 'Create Time',
    successTime: 'Success Time',
    state1: 'Pending',
    state2: 'Payed',
    state3: 'Failed',
    state4: 'Closed',
    state9: 'Finished',
    notifyState1: 'Notifying',
    notifyState2: 'Notify Failed',
    notifyState3: 'Notified',
  },
  payoutOrder: {
    id: 'trsaction ID',
    tradeId: 'Merchant Trade ID',
    amount: 'Amount',
    fee: 'Fee',
    accountNumber: 'Account Number',
    firstName: 'First Name',
    lastName: 'Last Name',
    bankName: 'Bank Name',
    branchName: 'Branch Name',
    bankCode: 'Bank Code',
    failureReason: "Failure Reason",
    createTime: 'Create Time',
    remark: 'Remark',
    status: 'Status',
    status1: 'Created',
    status2: 'Verify Pending',
    status3: 'Verified',
    status4: 'Pending',
    status5: 'Bank Pending',
    status6: 'Paid',
    status01: 'Verify Failed',
    status02: 'Pay Failed',
    status03: 'Reversed',
  },
}
