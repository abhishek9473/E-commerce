import { useState, useEffect } from "react";

const Snackbar = ({ type = "sucess" || "error", message, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);
  message = "hello user";
  type = "sucess"

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsOpen(true);
      }, 500); // Change delay as needed
    }
  }, [isOpen]);

  const handleCloseSnackbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-6 left-4 mx-auto w-80 flex items-center justify-between p-3 bg-green-700 text-white shadow-md">
          <div className="flex items-center gap-3">
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p>Snackbar message goes here</p>
          </div>
          <button
            className="ml-4 text-white font-bold"
            onClick={handleCloseSnackbar}
          >
            <svg className="h-4 w-4" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                d="M14.95 14.95a1 1 0 01-1.42 0L10 11.41l-3.54 3.54a1 1 0 01-1.42-1.42L8.59 10 5.05 6.46a1 1 0 011.42-1.42L10 8.59l3.54-3.54a1 1 0 011.42 1.42L11.41 10l3.54 3.54a1 1 0 010 1.41z"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Snackbar;
