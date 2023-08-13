import Clock from '@/Clock';
import Timer from '@/Timer'
import { useEffect, useState } from 'react';
import { styled } from 'styled-components'

export default function Home() {

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  `;

  const Title = styled.h2`
    margin: 0;
  `;

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Title>現在時刻</Title>
      <Clock now={date} />
    </Wrapper>
  )
}
