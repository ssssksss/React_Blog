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

            <h2 className='h2'> 📌 Date ,  </h2>
            <li>  </li>

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

            <h2 className='h2'> 📌 날짜로 요일 구하기 </h2>
            <li> (자바8 이후)  </li>
            <div className="block4">
              <li> LocalDate date = LocalDate.of(1111,11,11); </li>
              <li> DayOfWeek dayOfWeek = date.getDayOfWeek(); </li>
              <li> (참고) dayOfWeek.getDisplayName(TextStyle.[FULL,NARROW,SHORT], [Locale.US, Locale.KOREAN]); <small> Monday, M, Mon </small> </li>
              <li> 요일 = dayOfWeek.getValue(); <small> 1~7 </small> </li>
            </div>
            <li> (자바8 이전) </li>
            <div className="block4">
              <li> <a href="https://hianna.tistory.com/610" target="_blank" rel="noopener noreferrer"> 참고 </a> </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 직렬화(Serialization) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> private static final long serialVersionUID = 1L; </li>
            <li> 자바 객체를 바이트 배열로 변환하고 파일,메모리,데이터베이스 등으로 저장하는 방법 </li>
            <li> 위의 과정을 반대로 하는 것을 Deserialization(역직렬화)라고 한다. </li>
            <li> 자바 객체가 바이트배열로 변환될 때 serialVersionUID도 같이 저장된다. </li>
            <li> 자바 객체를 다시 생성할 때 serialVersionUID를 체크한다. 다르면 예외발생 </li>

            <h2 className='h2'> 📌 직렬화 예시 </h2>
            <div className="block4">
              <li> private static String serialize() {"{"}
                <li>  Member member = new Member("홍길동","활빈당",20); </li>
                <li>  byte[] serializedMember; </li>
                <li>  String serializedMemberStr = ""; </li>
                <li>  try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {"{"}
                  <li>  try (ObjectOutputStream oos = new ObjectOutputStream(baos)) {"{"}
                    <li> oos.writeObject(member); </li>
                    <li> serializedMember = baos.toByteArray(); </li>
                    <li> serializedMemberStr = Base64.getEncoder().encodeToString(serializedMember); </li>
                  </li>
                  <li> {"}"} </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> return serializedMemberStr; </li>
              <li> {"}"} </li>
            </div>
            <li>  </li> <br />
            <h2 className='h2'> 📌 역직렬화 예시 </h2>
            <div className="block4">
              <li> private static void deserialize(byte[] serializedMember) {"{"}
                <li> try (ByteArrayInputStream bais = new ByteArrayInputStream(serializedMember)) {"{"}
                  <li> try (ObjectInputStream ois = new ObjectInputStream(bais)) {"{"}
                    <li> Object o = ois.readObject(); </li>
                    <li> Member o1 = (Member) o; </li>
                    <li> System.out.println(o1); </li>
                  </li>
                  <li> {"}"} </li>
                </li>
                <li> {"}"} </li>
              </li>
              <li> {"}"} </li>
            </div>

          </div>
        </details>
      </div>
      <div className='block1'>
        <details>
          <summary> Stream(중요, 나중에 꼭 정리하기) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 스트림은 배열 또는 컬렉션 인스턴스를 이용해서 사용 가능, 필터링하고 원하는 결과를 출력가능 </li>
            <li> Java 8 </li>
            <li> 쓰레드를 이용한 병렬처리도 가능 </li>
            <li> 스트림 과정 : 매핑 - 필터링 - 결과만들고 - 결과반환 </li>
            <li> <a href="https://jeong-pro.tistory.com/229" target="_blank" rel="noopener noreferrer"> 스트림 공부 링크 </a> </li>

            <h2 className='h2'> 📌 배열 스트림 </h2>
            <li> {"Stream<String> stream = Arrays.stream(arr)"} </li>
            <li> {"Stream<String> streamOfArrayPart = Arrays.stream(arr,1,3)"} </li>

            <h2 className='h2'> 📌컬렉션 스트림  </h2>
            <li> {"public interface Collection<E> extends Iterable<E>"} </li>
            <li> {"default Stream<E> stream() "} </li>
            <li> {" return StreamSupport.strea(spliterator(),false);"} </li>
            <li> {" "}</li>
            <li> {" Stream<String> stream = list.stream(); "}</li>
            <li> {" Stream<String> parallelStream = list.parallelStream(); "}</li>

            <h2 className='h2'> 📌  </h2>
            <li>  </li>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> Optional </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> T타입의 객체를 포장해주는 래퍼 클래스 </li>
              <li> Null을 예외처리하지 않고 처리가 가능하다는 장점이 있다. </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 메소드 </h2>
            <div className='block4'>
              <li> opt.isEmpty() <small> 값이 존재하는지 boolean값 리턴  </small> </li>
              <li> opt.orElseGet() <small> 저장된 값이 존재하면 값을 반환 값이 없으면 인수로 전달된
                람다 표현식 결과값 반환 </small> </li>
              <li> Optional.of() <small> # 저장된 값이 존재하면 입력된 값을 반환 없으면 인수로 전달된 예외를 발생 </small> </li>
              <div className="block3">
                <li> Optional{'<String>'} opt = Optional.of("result"); </li>
              </div>
              <li> Optional.ofNullable() <small> # value가 null인 경우 Optional 반환 </small> </li>
              <div className="block3">
                <li> {' Optional<String> opt = Optional.ofNullable(객체); '} </li>
                <li> 객체가 존재하지 않으면 return Optional.empty + 에러발생 </li>
                <li> 객체가 존재하면 return Optional객체 </li>
              </div>
              <li> Optional.empty() </li>
              <li> opt.isPresent()  <small> 객체가 존재하는지 여부 판단, 있으면 true </small> </li>
              <li> Optional.ofNullable(객체).isPresent();  <small>  객체가 존재하는지 여부 판단, 있으면 true </small> </li>
              <li> opt.orElse()  <small> 옵셔널 객체가 null이든 아니든 실행 기본값으로 제공할 객체를 지정 </small> </li>
              <li> Optional.ofNullable(객체).orElse(객체,문자열); <small>  객체값이 Null일때 사용할 문자열이나 객체를 지정  </small> </li>
              <li> opt.orElseGet()  <small>  옵셔널 객체가 null일 때만 실행 , 기본값으로 제공할 공급자함수 지정 </small> </li>
              <li> opt.orElseThrow()  <small>  옵셔널 객체가 비어있으면 , 예외 공급자함수를 통해 예외 발생 </small> </li>
            </div>

            <h2 className='h2'> ✔ 예시 </h2>
            <li>
              <div className='block3'>
                <h3 className='h3'> 🎈 </h3>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>
      {/* 끝 */}
    </div>
  );
}

export default JavaBasic2;