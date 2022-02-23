import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

export default function App() {
  //states
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionsModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionsModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionsModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />
      <GlobalStyle />
    </>
  );
}
