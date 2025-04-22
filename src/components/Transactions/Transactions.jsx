import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  TransactionsContainer,
  ResponsiveWrapper,
  WarningBanner,
  WarningIconWrapper,
  TabsContainer,
  Tab,
  ActiveIndicator,
  TableContainer,
  HeaderCell,
  TableRow,
  TableCell,
  StatusBadge,
  DownloadButton,
  TransactionHeading,
} from "./styledComponnets";

const Transactions = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Completed", "Pending", "Cancelled"];

  // Updated dummy data to match the provided structure
  const transactions = [
    {
      verdict: "SUCCESS",
      merchantTransactionId: "a94f5c0d-6962-4b89-a93f-845d8da73ff7",
      courseName: "Aut possimus deleni",
      payableAmount: 10,
      buyTime: new Date("2025-03-11T08:41:24.013Z"),
      inVoiceId: "AGH20250311-00031",
      status: "Pending",
    },
    {
      verdict: "SUCCESS",
      merchantTransactionId: "b83e6a1d-7854-4c92-b83d-956f7dc84e15",
      courseName: "Aut possimus deleni",
      payableAmount: 10,
      buyTime: new Date("2025-03-12T09:22:15.427Z"),
      inVoiceId: "AGH20250312-00042",
      status: "Cancelled",
    },
    {
      verdict: "SUCCESS",
      merchantTransactionId: "c72d5b2e-8945-5d91-c72e-867e6ef95f26",
      courseName: "Aut possimus deleni",
      payableAmount: 10,
      buyTime: new Date("2025-03-15T14:37:52.891Z"),
      inVoiceId: "AGH20250315-00053",
      status: "Completed",
    },
  ];

  // Format date function
  const formatDate = (date) => {
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filter transactions based on active tab
  const filteredTransactions =
    activeTab === "All"
      ? transactions
      : transactions.filter((transaction) => transaction.status === activeTab);

  return (
    <TransactionsContainer>
      <TransactionHeading>Transactions</TransactionHeading>
      <WarningBanner>
        <WarningIconWrapper>
          <FontAwesomeIcon icon={faExclamationCircle} />
        </WarningIconWrapper>
        Please do not initiate any transaction if any payment is in a pending
        state.
      </WarningBanner>

      <TabsContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {activeTab === tab && <ActiveIndicator />}
          </Tab>
        ))}
      </TabsContainer>
      
      <ResponsiveWrapper>
        <TableContainer>
          <thead>
            <tr>
              <HeaderCell>Invoice No.</HeaderCell>
              <HeaderCell>Transaction ID</HeaderCell>
              <HeaderCell>Transaction Date</HeaderCell>
              <HeaderCell>Course</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Status</HeaderCell>
              <HeaderCell>Actions</HeaderCell>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell>{transaction.inVoiceId}</TableCell>
                <TableCell>
                  {transaction.merchantTransactionId.slice(0, 16)}...
                </TableCell>
                <TableCell>{formatDate(transaction.buyTime)}</TableCell>
                <TableCell>{transaction.courseName}</TableCell>
                <TableCell>{transaction.payableAmount.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusBadge status={transaction.status}>
                    {transaction.status}
                  </StatusBadge>
                </TableCell>
                <TableCell>
                  <DownloadButton>
                    <FontAwesomeIcon icon={faDownload} />
                  </DownloadButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableContainer>
      </ResponsiveWrapper>
    </TransactionsContainer>
  );
};

export default Transactions;