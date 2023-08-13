import Clock from "@/Clock";
import InputTimer from "@/InputTimer";
import { useCallback, useEffect, useState } from "react";
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

type ITimer = {
  endTime?: Date;
};

type ITimerList = {
  carpenter1: ITimer;
  carpenter2: ITimer;
  carpenter3: ITimer;
  carpenter4: ITimer;
  carpenter5: ITimer;
  carpenter6: ITimer;
  developmentFacility: ITimer;
};

export default function Home() {
  const [date, setDate] = useState(new Date());

  const [timerList, setTimerList] = useState<ITimerList>({
    carpenter1: {},
    carpenter2: {},
    carpenter3: {},
    carpenter4: {},
    carpenter5: {},
    carpenter6: {},
    developmentFacility: {},
  });

  const getEndTime = useCallback((name: string) => {
    const endTime =
      typeof window !== "undefined"
        ? window.localStorage.getItem(`${name}-endTime`)
        : null;

    if (endTime) return new Date(endTime);
    return;
  }, []);

  const setTimer = useCallback(
    (name: string, days: string, hours: string, minutes: string) => {
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + Number(days));
      endDate.setHours(endDate.getDate() + Number(hours));
      endDate.setMinutes(endDate.getDate() + Number(minutes));

      localStorage.setItem(`${name}-endTime`, endDate.toISOString());

      const updatedTimerList: ITimerList = {
        ...timerList,
        [name]: { endTime: endDate },
      };
      setTimerList(updatedTimerList);
    },
    [date, timerList],
  );

  const resetTimer = useCallback(
    (name: string) => {
      localStorage.removeItem(`${name}-endTime`);
      const updatedTimerList: ITimerList = {
        ...timerList,
        [name]: { endTime: undefined },
      };
      setTimerList(updatedTimerList);
    },
    [timerList],
  );

  useEffect(() => {
    setTimerList({
      carpenter1: { endTime: getEndTime("carpenter1") },
      carpenter2: { endTime: getEndTime("carpenter2") },
      carpenter3: { endTime: getEndTime("carpenter3") },
      carpenter4: { endTime: getEndTime("carpenter4") },
      carpenter5: { endTime: getEndTime("carpenter5") },
      carpenter6: { endTime: getEndTime("carpenter6") },
      developmentFacility: { endTime: getEndTime("developmentFacility") },
    });

    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [getEndTime]);

  return (
    <>
      <Wrapper>
        <SectionTitle>現在時刻</SectionTitle>
        <Clock now={date} />

        <SectionTitle>大工タイマー</SectionTitle>
        <InputTimer
          name="carpenter1"
          disabled={!!timerList.carpenter1.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
        <InputTimer
          name="carpenter2"
          disabled={!!timerList.carpenter2.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
        <InputTimer
          name="carpenter3"
          disabled={!!timerList.carpenter3.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
        <InputTimer
          name="carpenter4"
          disabled={!!timerList.carpenter4.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
        <InputTimer
          name="carpenter5"
          disabled={!!timerList.carpenter5.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
        <InputTimer
          name="carpenter6"
          disabled={!!timerList.carpenter6.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />

        <SectionTitle>ラボ</SectionTitle>
        <InputTimer
          name="developmentFacility"
          disabled={!!timerList.developmentFacility.endTime}
          onChangeTimer={setTimer}
          onResetTimer={resetTimer}
        />
      </Wrapper>
    </>
  );
}
