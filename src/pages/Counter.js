import Footer from "components/commons/Footer";
import HeadLessLayout from "components/layouts/HeadLessLayout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const navigate = useNavigate();

  const [num, setNum] = useState(0);

  const increase = () => setNum((prev) => prev + 1);

  return (
    <HeadLessLayout>
      <div>
        <div>카운터페이지</div>

        <div>클릭수 {num}</div>
        <div>
          <button onClick={increase}>클릭</button>
        </div>

        {/* <Link to={"/"}>메인으로 이동</Link> */}
        <button onClick={() => navigate("/")}>메인으로 이동</button>
        <Footer />
      </div>
    </HeadLessLayout>
  );
};

export default Counter;
