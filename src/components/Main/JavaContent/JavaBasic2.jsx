import React from 'react';

const JavaBasic2 = (props) => {
    return (
        <div className="common_style">
            <div className='block1'>
                <details>
                    <summary> Time 객체 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  java.util.Date </li>
                        <li>  java.util.Calendar </li>
                        <li>  java.time(org.joda.time) , 자바 버전 8이상에서 사용가능 </li>

                        <h2 className='h2'> 📌 LocalDate , 날짜 </h2>
                        <li> LocalDate d = LocalDate.of(YYYY,MM,DD); , 2020-01-06  </li>
                        <li> LocalDate d = LocalDate.now() , 2020-01-06 </li>
                        <li> Period period = Period.between(D1,D2); , D1,D2의 차이를 반환 30일이상이면 반올림 </li>
                        <li> period.getYears(); , period.getMonths(); , period.getDays(); </li>
                        <li> ChronoUnit.[YEARS, MONTHS, WEEKS, DAYS, HOURS, SECONDS, MILLIS, NANOS].between(D1,D2); , 차이를 출력  </li>
                        <li> LocalDate.of(YYYY,MM,DD).format(DateTimeFormatter.BASIC_ISO_DATE); , String으로 변환 </li>
                        <li> Date.valueOf(LocalDate.of(YYYY,MM,DD)); , LocalDate를 java.sql.Date 변환 </li>
                        <li> LocalDate.parse("1111-11-11") , String을 LocalDate로 변환 </li>
                        <li> LocalDate.parse("11111111", DateTimeFormatter.BASIC_ISO_DATE); , String을 LocalDate로 변환 </li>
                        <li> LocalDate.from(LocalDateTime.now()); , LocalDateTime을 LocalDate로 변환 </li>

                        <h2 className='h2'> 📌 LocalTime , 시간 </h2>
                        <li> LocalTime t = LocalTime.now(); , 11:11:11  </li>
                        <li> LocalTime t = LocalTime.of(HH,MM,SS,ms); , 11:11:11.0000000 </li>
                        <li> T1.isBefore(T2); , T1객체가 T2보다 이전시간이면 true반환 </li>
                        <li> T1.isAfter(T2); , T1객체가 T2보다 이후시간이면 true반환 </li>
                        <li> Duration d = Duration.between(T1,T2); </li>
                        <li> d.getSeconds(), d.getNano(); </li>
                        <li> LocalDate.now().atTime(11, 11); , LocalDate을 LocalDateTime로 변환 </li>

                        <h2 className='h2'> 📌 LocalDateTime , 날짜 + 시간 </h2>
                        <li> LocalDateTime dt = LocalDateTime.now(); </li>
                        <li> LocalDateTime dt = LocalDateTime.of(YYYY,MM,DD,HH,MM,SS,MS); </li>
                        <li> dt.[plusYears(1),plusMonths(1),plusWeeks(1),plusDays(1),
                            plusHours(1),plusMinutes(1),plusSeconds(1),plusNanos(1)] </li>
                        <li> dt.[minusYears(),minusMonths(),minusWeeks(),minusDays(),
                            minusHours(),minusMinutes(),minusSeconds(),minusNanos()] </li>
                        <li> DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY년 M월 D일 A H시 M분");</li>
                        <li> String s = now.format(dtf); </li>
                        <li> DateTimeFormatter dtf = DateTimeFormatter.ofPattern("YYYY-MM-DD HH:MM:SS"); </li>
                        <li> LocalDateTime.now().format(DateTimeFormatter.ofPattern("YYYY-MM-DD HH:MM:SS")); , String으로 변환 </li>
                        <li> Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()); , LocalDateTime를 java.util.Date로 변환 </li>
                        <li> Timestamp.valueOf(LocalDateTime.now()), LocalDateTime을 java.sql.Timestamp로 변환 </li>
                        <li> LocalDateTime.parse("YYYY-MM-DDTHH:MM:SS"），String을 LocalDate로 변환  </li>
                        <li> LocalDateTime.parse("YYYY-MM-DD HH:MM:SS", DateTimeFormatter.ofPattern("YYYY-MM-DD HH:MM:SS")), ，String을 LocalDateTime로 변환 </li>
                        <li> LocalDateTime.ofInstant(new Date().toInstant(), ZoneId.systemDefault()); , java.util.Date을 LocalDateTime로 변환 </li>
                        <li>  </li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li>  </li>

                    </div>
                </details>
            </div>
        </div>
    );
}

export default JavaBasic2;