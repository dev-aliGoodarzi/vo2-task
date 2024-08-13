// React
import React from "react";
import Spinner from "../../Utils/Spinner/Spinner";
// React

// CSS
// import styles from "./PendingAndErrorManager.module.css";
// CSS

// Utils
// Utils

type T_PendingAndErrorManager = {
  isPending: boolean;
  isError: boolean;
  isDone: boolean;

  onError: () => void;
  showAfterDone: React.ReactElement;

  pendingText?: string;
};

const PendingAndErrorManager: React.FunctionComponent<
  T_PendingAndErrorManager
> = ({ isDone, isError, isPending, onError, showAfterDone, pendingText }) => {
  return (
    <>
      {!isDone && (
        <div className="w-full flex flex-col ">
          {isPending && !isError && !isDone ? (
            <div className="flex flex-col items-center justify-center mt-5">
              <p className="w-full text-center text-sm rtl">
                در حال بارگذاری {pendingText}
              </p>
              <Spinner />
            </div>
          ) : null}

          {!isPending && isError && !isDone ? (
            <div className="flex flex-col items-center justify-center">
              <p className="w-full text-center text-sm "></p>
              <button
                className="px-6 py-1 text-sm bg-falseMain text-white rounded-lg"
                onClick={onError}
              >
                تلاش دوباره
              </button>
            </div>
          ) : null}
        </div>
      )}
      {isDone && !isPending && !isError ? showAfterDone : null}
    </>
  );
};

export default PendingAndErrorManager;