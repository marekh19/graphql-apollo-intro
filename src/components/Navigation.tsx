import type { Dispatch, FC, SetStateAction } from "react";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

const Navigation: FC<Props> = ({ page, setPage }) => {
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
        &lt;&lt;&lt;
      </button>
      <button type="button" onClick={handleNextPage}>
        &gt;&gt;&gt;
      </button>
    </>
  );
};

export default Navigation;
