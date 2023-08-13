import Clock from "@/Clock";
import InputTimer from "@/InputTimer";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const SectionTitle = styled.h2`
  margin: 0;
`;

export default function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Wrapper>
        <SectionTitle>現在時刻</SectionTitle>
        <Clock now={date} />

        <SectionTitle>大工タイマー</SectionTitle>
        <InputTimer id={1} />
        <InputTimer id={2} />
        <InputTimer id={3} />
        <InputTimer id={4} />
        <InputTimer id={5} />
        <InputTimer id={6} />

        <SectionTitle>ラボ</SectionTitle>
        <InputTimer id={7} />
      </Wrapper>
    </>
  );
}
