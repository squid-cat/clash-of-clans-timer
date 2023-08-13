import Clock from '@/Clock';
import Timer from '@/Timer'
import { useEffect, useState } from 'react';
import { styled } from 'styled-components'

export default function Home() {

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Clock now={date} />
    </Wrapper>
  )
}
