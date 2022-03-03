import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Day from '../Atoms/Day';

const Main = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  `;
const Header = styled.header`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #ffbb6d;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 2rem;
  font-family: 'Cafe24Ssurround';
`;
const LeftButton = styled.button`
  margin-right: 20px;
  `;
const RightButton = styled.button`
  margin-left: 20px;
`;
const DayHeader = styled.div`
  background: gray;
  text-align: center;
  height: 24px;
  line-height: 24px;
  font-family: 'Cafe24Ssurround';
  border-radius: 10px;
  background: #ffbb6d;
  font-size: 1.4rem;

  color: ${(props) => (props.color || "black")};
`;

const Month = () => {


  let todayDate = new Date();
  let [dayList, setDayList] = useState([]);
  let [year, setYear] = useState(parseInt(todayDate.getFullYear()));
  let [month, setMonth] = useState(parseInt(todayDate.getMonth()));

  const moveLeftDate = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else {
      setMonth(month - 1);
    }
  }

  const moveRightDate = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  useEffect(() => {

    let date = new Date(year, month, 1);

    let prevDate = new Date(date.getFullYear(), date.getMonth(), 0);
    let prevEndDay = prevDate.getDate(); //28-31
    let prevEndDayW = prevDate.getDay(); //0-6

    let nowDate = new Date(date.getFullYear(), date.getMonth(), 1);
    let nowStartDayW = nowDate.getDay(); //0-6
    let nowEndDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); //28-31

    let nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    let nextStartDayW = nextDate.getDay(); //0-6

    setDayList([]);

    const content = [
      {
        "name": "나와라",
        "cont": "내용"
      },
      {
        "name": "나와라1",
        "cont": "내용"
      },
      {
        "name": "나와라2",
        "cont": "내용"
      }
    ]

    const dateString = (year, month, day) => {
      if (month === 13) {
        year = year + 1;
        month = 1;
      }
      else if (month === 0) {
        year = year - 1;
        month = 12;
      }
      return year.toString() + ("0" + (month)).slice(-2) + ("0" + (day)).slice(-2);
    }

    //[1]시작일이 일요일일 경우
    if (nowStartDayW === 0) {
      //이번달
      for (let i = 1; i <= nowEndDay; i++) {
        setDayList(array => [...array, { "key": dateString(year, month + 1, i), "day": i, "dayW": (i - 1) % 7, "content": content }]);
      }
      //다음달
      if (nextStartDayW !== 0) {
        for (let i = 1; i <= 7 - nextStartDayW; i++) {
          setDayList(array => [...array, { "key": dateString(year, month + 2, i), "day": i, "dayW": nextStartDayW + i - 1, "opacity": "true" }]);
        }
      }
    }
    //[2]시작일이 일요일이 아닌 경우
    else {
      //저번달
      for (let i = prevEndDay - prevEndDayW, j = 0; i <= prevEndDay; i++, j++) {
        setDayList(array => [...array, { "key": dateString(year, month, i), "day": i, "dayW": j, "opacity": "true" }]);
      }
      //이번달
      for (let i = 1; i <= nowEndDay; i++) {
        setDayList(array => [...array, { "key": dateString(year, month + 1, i), "day": i, "dayW": (i - 1 + nowStartDayW) % 7, "content": content }]);
      }
      //다음달
      if (nextStartDayW !== 0) {
        for (let i = 1; i <= 7 - nextStartDayW; i++) {
          setDayList(array => [...array, { "key": dateString(year, month + 2, i), "day": i, "dayW": nextStartDayW + i - 1, "opacity": "true" }]);
        }
      }
    }

  }, [month])

  return (
    <>
      <Header>
        <LeftButton onClick={() => { moveLeftDate() }}> 👈 </LeftButton>
        {year}년 {month + 1}월
        <RightButton onClick={() => { moveRightDate() }}> 👉 </RightButton>
      </Header>
      <Main>
        <DayHeader color={"red"}> 일 </DayHeader>
        <DayHeader> 월 </DayHeader>
        <DayHeader> 화 </DayHeader>
        <DayHeader> 수 </DayHeader>
        <DayHeader> 목 </DayHeader>
        <DayHeader> 금 </DayHeader>
        <DayHeader color={"blue"}> 토 </DayHeader>
        {
          dayList.map((i) => {
            if (i.opacity) {

              if (i.dayW === 6) {
                return <Day id={i.key} key={i.key} color="blue" day={i.day} opacity={i.opacity} content={i.content}> </Day>
              }
              else if (i.dayW === 0) {
                return <Day id={i.key} key={i.key} color="red" day={i.day} opacity={i.opacity} content={i.content}> </Day>
              }
              else {
                return (
                  <Day id={i.key} key={i.key} day={i.day} opacity={i.opacity} content={i.content}>  </Day>
                )
              }
            }
            else {

              if (i.dayW === 6) {
                return <Day id={i.key} key={i.key} color="blue" day={i.day} content={i.content}> </Day>
              }
              else if (i.dayW === 0) {
                return <Day id={i.key} key={i.key} color="red" day={i.day} content={i.content}> </Day>
              }
              else {
                return (
                  <Day id={i.key} key={i.key} day={i.day} content={i.content}> </Day>
                )
              }
            }
          })
        }
      </Main>
    </>
  );
};

export default Month;