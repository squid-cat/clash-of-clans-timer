import Clock from "@/Clock";
import InputTimer from "@/InputTimer";
import TimerButton from "@/TimerButton";
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

const Section = styled.div`
  display: flex;
  gap: 14px;
`;

type ITimer = {
  endTime?: Date;
  requiredTime: {
    days: number;
    hours: number;
    minutes: number;
  };
};

type ITimerList = Record<string, ITimer>;

export default function Home() {
  const [date, setDate] = useState(new Date());

  const [timerList, setTimerList] = useState<ITimerList>({
    carpenter1: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    carpenter2: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    carpenter3: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    carpenter4: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    carpenter5: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    carpenter6: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
    developmentFacility: {
      requiredTime: {
        days: 0,
        hours: 0,
        minutes: 0,
      },
    },
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
    (name: string, days: number, hours: number, minutes: number) => {
      const endDate = new Date(date);
      endDate.setDate(endDate.getDate() + days);
      endDate.setHours(endDate.getDate() + hours);
      endDate.setMinutes(endDate.getDate() + minutes);

      localStorage.setItem(`${name}-endTime`, endDate.toISOString());

      const updatedTimerList: ITimerList = {
        ...timerList,
        [name]: { ...timerList[name], endTime: endDate },
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
        [name]: { ...timerList[name], endTime: undefined },
      };
      setTimerList(updatedTimerList);
    },
    [timerList],
  );

  const onChangeTimer = useCallback(
    (name: string, days: number, hours: number, minutes: number) => {
      const updatedTimerList: ITimerList = {
        ...timerList,
        [name]: {
          requiredTime: {
            days,
            hours,
            minutes,
          },
        },
      };
      setTimerList(updatedTimerList);
    },
    [timerList],
  );

  const onAccept = useCallback(
    (name: string) => {
      const targetTimer = timerList[name];
      if (targetTimer)
        setTimer(
          name,
          targetTimer.requiredTime.days,
          targetTimer.requiredTime.hours,
          targetTimer.requiredTime.minutes,
        );
    },
    [setTimer, timerList],
  );

  const onReset = useCallback(
    (name: string) => {
      resetTimer(name);
    },
    [resetTimer],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimerList({
      carpenter1: {
        ...timerList.carpenter1,
        endTime: getEndTime("carpenter1"),
      },
      carpenter2: {
        ...timerList.carpenter2,
        endTime: getEndTime("carpenter2"),
      },
      carpenter3: {
        ...timerList.carpenter3,
        endTime: getEndTime("carpenter3"),
      },
      carpenter4: {
        ...timerList.carpenter4,
        endTime: getEndTime("carpenter4"),
      },
      carpenter5: {
        ...timerList.carpenter5,
        endTime: getEndTime("carpenter5"),
      },
      carpenter6: {
        ...timerList.carpenter6,
        endTime: getEndTime("carpenter6"),
      },
      developmentFacility: {
        ...timerList.developmentFacility,
        endTime: getEndTime("developmentFacility"),
      },
    });
  }, [
    getEndTime,
    timerList.carpenter1,
    timerList.carpenter2,
    timerList.carpenter3,
    timerList.carpenter4,
    timerList.carpenter5,
    timerList.carpenter6,
    timerList.developmentFacility,
  ]);

  return (
    <>
      <Wrapper>
        <SectionTitle>現在時刻</SectionTitle>
        <Clock now={date} />

        <SectionTitle>大工タイマー</SectionTitle>
        <Section>
          <InputTimer
            name="carpenter1"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter1.endTime}
          />
          <TimerButton
            name="carpenter1"
            disabled={!!timerList.carpenter1.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <Section>
          <InputTimer
            name="carpenter2"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter2.endTime}
          />
          <TimerButton
            name="carpenter2"
            disabled={!!timerList.carpenter2.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <Section>
          <InputTimer
            name="carpenter3"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter3.endTime}
          />
          <TimerButton
            name="carpenter3"
            disabled={!!timerList.carpenter3.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <Section>
          <InputTimer
            name="carpenter4"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter4.endTime}
          />
          <TimerButton
            name="carpenter4"
            disabled={!!timerList.carpenter4.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <Section>
          <InputTimer
            name="carpenter5"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter5.endTime}
          />
          <TimerButton
            name="carpenter5"
            disabled={!!timerList.carpenter5.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <Section>
          <InputTimer
            name="carpenter6"
            onChange={onChangeTimer}
            disabled={!!timerList.carpenter6.endTime}
          />
          <TimerButton
            name="carpenter6"
            disabled={!!timerList.carpenter6.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>

        <SectionTitle>ラボ</SectionTitle>
        <Section>
          <InputTimer
            name="developmentFacility"
            onChange={onChangeTimer}
            disabled={!!timerList.developmentFacility.endTime}
          />
          <TimerButton
            name="developmentFacility"
            disabled={!!timerList.developmentFacility.endTime}
            onClickAccept={onAccept}
            onClickReset={onReset}
          />
        </Section>
      </Wrapper>
    </>
  );
}
