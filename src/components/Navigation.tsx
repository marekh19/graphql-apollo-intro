import type { Dispatch, FC, SetStateAction } from "react";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

export const Navigation: FC<Props> = ({ page, setPage }) => {
  const handleNextPage = () => {
    setPage((prev) => ++prev);
  };

  const handlePrevPage = () => {
    if (!(page - 1 < 1)) {
      setPage((prev) => --prev);
    }
  };

  return (
    <>
      <button type="button" onClick={handlePrevPage} disabled={page < 2}>
        Previous
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>
    </>
  );
};
