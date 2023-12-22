import { Dialog } from "primereact/dialog";
import Image from "next/image";
import etherlinkSpinner from "../../public/images/logo.webp";

const LoadingModal = ({ loading, selectedToken }) => {
  return (
    <Dialog closable={false} visible={loading} style={{ width: "50vw" }}>
      <Image width={200} height={200} src={etherlinkSpinner} id="loading" className="text-center mx-auto" />
      <p className="text-center font-medium mt-4">Drip! Drip! Dripping you some {selectedToken}'s.... </p>
    </Dialog>
  );
};

export default LoadingModal;
