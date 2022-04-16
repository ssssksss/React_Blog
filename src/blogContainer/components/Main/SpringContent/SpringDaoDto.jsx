import React, { useEffect, useRef } from 'react';
import GridTableCountNRow100px from '../../Templates/Grid/GridTableCountNRow100px';
import GridColumn from '../../Templates/Grid/GridColumn';
import GridRow from '../../Templates/Grid/GridRow';
import GridField from '../../Templates/Grid/GridField';

const SpringModel = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> [1] Dao(테이블) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @Entity </h2>
            <div className='block4'>
              <li> @Entity <small> JPA가 관리하게 한다  </small> </li>
              <li> @Entity(name = "테이블명") <small> 이름은 데이터베이스 테이블명이 된다.(@Table에서 사용할것)  </small> </li>
              <li> 기본 생성자가 필수 </li>
              <li> final, enum, interface class에서 사용 불가능함, 필드 변수에 final 사용 불가 </li>
            </div>

            <h2 className='h2'> 📌 @Table </h2>
            <div className='block4'>
              <li> @Table(name="테이블명") <small> 테이블명 </small> </li>
              <li> catalog <small> 잘 모름 </small> </li>
              <li> schema <small> 잘 모름 </small> </li>
              <li> uniqueContraints <small> 잘 모름 </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @Access </h2>
            <div className='block4'>
              <li> 사용해본적은 없지만 JPA가 엔티티에 어떻게 접근할지에 대한 방식이라고 한다. </li>
              <li> @Access를 필드에 사용해서 추가적인 데이터를 넣어주는 방법이 있는것 같다. 하지만 굳이 써야되나 싶다.. </li>
              <li> @Access(AccessType.FIELD) <small> @Id를 사용할 때 사용되는 방식, private여도 접근이 가능하게 한다. 거의 기본이라 생각 </small> </li>
              <li> @Access(AccessType.PROPERTY) <small> getter을 통해서만 접근 </small> </li>
            </div>

            <h2 className='h2'> 📌 @Builder </h2>
            <div className='block4'>
              <li> 기본 생성자가 만들어지고 빌더 패턴이 작동 </li>
              <li> 에러 해결1 : @AllArgsConstructor을 같이 사용한다. </li>
              <li> 에러 해결2  </li>
              <li> {' @Builder '} </li>
              <li> {' public 메소드(데이터타입 매개변수명) { '}
                <li> {' this.필드명 = 값; '} </li>
              </li>
              <li> {' } '} </li>
            </div>

            <h2 className='h2'> 📌 @NoArgsConstructor </h2>
            <div className='block4'>
              <li> 기본 생성자 설정 </li>
              <li> @NoArgsConstructor(force=true) <small> 초기값이 필요한 final 변수에 null,0 등 기본값을 초기화해준다, 잘 모르겠다. </small> </li>
              <li> @NoArgsConstructor는 @NonNull을 무시한다. </li>
              <li> @NoArgsConstructor(AccessLevel.PROTECTED) <small> 권장 </small> </li>
              <li> @NoArgsConstructor(AccessLevel.PUBLIC) </li>
              <li> @NoArgsConstructor(AccessLevel.PRIVATE) </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @AllArgsConstructor </h2>
            <div className='block4'>
              <li> 모든 필드에 파라미터를 넣는 생성자 </li>
              <li> private final String id; <small> 생성자 필드에 포함, 뭔말이지.. </small> </li>
              <li> @Nonnull private String id; <small> 생성자 필드에 포함, 뭔말이지.. </small> </li>
              <li> private String id; <small> 생성자 필드에 포함되지 않음, 뭔말이지.. </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @RequiredArgsConstructor </h2>
            <div className='block4'>
              <li> final이나 @NonNull 필드만 파라미터로 받는 생성자 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @JsonIgnoreProperties </h2>
            <div className='block4'>
              <li> {' @JsonIgnoreProperties({"id"}) '} <small> 무시할 목록들을 처리 </small> </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @DynamicInsert, @DynamicUpdate </h2>
            <div className='block4'>
              <li> @DynamicInsert <small> insert 시 null 인 필드 제외 </small> </li>
              <li> @DynamicUpdate <small> update 시 null 인 필드 제외 </small> </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [2] Dao(필드) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @Id </h2>
            <div className='block4'>
              <li> @Id </li>
              <li> private Long id; <small> 테이블의 기본키로 지정 </small> </li>
            </div>

            <h2 className='h2'> 📌 @GeneratedValue </h2>
            <div className='block4'>
              <li> @GeneratedValue </li>
              <li> @GeneratedValue(startegy = GenerationType.IDENTITY) <small> mysql에서 자동으로 기본값을 생성해준다. </small> </li>
              <li> @GeneratedValue(startegy = GenerationType.SEQUENCE) <small> oracle에서 자동으로 기본값을 생성해준다. </small> </li>
              <li> @GeneratedValue(startegy = GenerationType.AUTO) <small> 데이터베이스에 따라 자동으로 기본값을 생성해준다.(추천) </small> </li>
              <li> @GeneratedValue(startegy = GenerationType.TABLE) <small> 키 생성 테이블에서 자동으로 기본값을 생성해준다. , 잘 모름 </small> </li>
              <li> TableGenerator 필요, @TableGenerator(name="TEM_SEQ_GENERATOR",table="TEAM_SEQUENCES",pkColumnValue="TEAM_SEQ",allocationSize=1) </li>
              <li> 나중에 다시 알아보자... </li>
            </div>

            <h2 className='h2'> 📌 @Column </h2>
            <div className='block4'>
              <li> @Column(name="") <small> 컬럼의 이름 지정 </small> </li>
              <li> @Column(nullable=true, false) <small> null값 허용, 허용안함(추천) </small> </li>
              <li> @Column(unique = true, false) <small> 유니크 조건 </small> </li>
              <li> @Column(insertable=true, false) <small> 엔티티 저장시 필드값이 저장, 저장안함 , 사용하면 데이터에이스에 저장이 안되는것 같다. </small> </li>
              <li> @Column(updatable=true, false) <small>  엔티티 수정시 값 수정, 수정안함, 값을 한번 넣고 수정하면 수정이 안되는것 같다.(아마 1번의 트랜잭션에서 인것 같다.) </small> </li>
              <li> @Column(columnDefinition="VARCHAR(255) NOT NULL") <small> 조건 직접 부여하는 방법 </small> </li>
              <li> @Column(columnDefinition = "varchar(255) default 'ssssksss'"") <small> 문자열 디폴트값 저장 방법 </small> </li>
              <li> @Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP") <small> 업데이트시 현재 날짜 저장하는 방법 </small> </li>
              <li> @Column(length = 10) <small> 문자 길이 제한 </small> </li>
              <li> @Column(table) <small> ???? </small> </li>
              <li> @Column(precision) <small> BigDecimal에서 소수점 포함 전체 자릿수 설정, 잘모름 </small> </li>
              <li> @Column(scale) <small> BigDecimal에서 소수점 자릿수 설정 </small> </li>
            </div>

            <h2 className='h2'> 📌 @Enumerated </h2>
            <div className='block4'>
              <li> 자바 enum을 매핑할 때 사용 </li>
              <li> @Enumerated(value = EnumType.ORDINAL) <small> enum 순서를 db에 저장(순서는 enum을 변경하게 되면 바뀔수 있음) </small> </li>
              <li> @Enumerated(value = EnumType.STRING)  <small> enum 이름을 db에 저장(권장) </small> </li>
            </div>

            <h2 className='h2'> 📌 @Temporal </h2>
            <div className='block4'>
              <li> 날짜 타입에 매핑을 하게 해주는 역할 </li>
              <li> @Temporal(value = TemporalType.DATE) <small> 날짜 , new Date()를 yyyy-mm-dd </small></li>
              <li> @Temporal(value = TemporalType.TIME) <small> 시간 , new Date()를 hh:mm:ss </small> </li>
              <li> @Temporal(value = TemporalType.TIMESTAMP) <small> 날짜와 시간, new Date()를 yyyy-mm-dd hh:mm:ss.msmsms </small> </li>
            </div>

            <h2 className='h2'> 📌 @Lob </h2>
            <div className='block4'>
              <li> 사용해본적읍 없다. </li>
              <li> @Lob private String stringLob; <small> clob, LONGTEXT </small> </li>
              <li> @Lob private Integer integerLob; <small> blog, LONGBLOB </small> </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @Transient </h2>
            <div className='block4'>
              <li> db에 저장,조회 하지 않게 한다. 왜 사용하는지는 모르겠다. </li>
            </div>

            <h2 className='h2'> 📌 @CreationTimestamp, @UpdateTimestamp </h2>
            <div className='block4'>
              <li> hibernate 어노테이션 </li>
              <li> @CreationTimestamp <small> INSERT 쿼리가 발생할 때 현재의 시간을 넣어준다. </small> </li>
              <li> private LocalDateTime createdAt; </li>
              <li> @UpdateTimestamp <small> UPDATE 쿼리가 발생할 때 현재의 시간을 넣어준다. </small> </li>
              <li> private LocalDateTime updatedAt; </li>
            </div>

            <h2 className='h2'> 📌 @JsonIgnore </h2>
            <div className='block4'>
              <li> 데이터를 주고 받을 때 해당데이터를 무시하게 된다. </li>
              <li> 필드레벨에서 무시 </li>
              <li>  </li>
            </div>

            <h2 className='h2'> 📌 @JsonIgnoreType </h2>
            <div className='block4'>
              <li> 위의 주석이 달린 곳의 모든 속성을 무시 </li>
            </div>

            <h2 className='h2'> 📌 @JsonInclude </h2>
            <div className='block4'>
              <li> 어노테이션 속성을 제외  </li>
            </div>

            <h2 className='h2'> 📌 @JsonAutoDetect </h2>
            <div className='block4'>
              <li> ???? </li>
            </div>

            <h2 className='h2'> 📌  </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>




          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [3] Dao 예시 (추가적으로 수정 필요) </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> @Getter </li>
              <li> @Builder </li>
              <li> @Entity </li>
              <li> @Table(name="User") <small> 데이터베이스 이름 명시 </small> </li>
              <li> public class UserDao {"{"}
                <li> @Id </li>
                <li> @GeneratedValue(strategy = GenerationType.IDENTITY) </li>
                <li> private Long id; </li>
              </li>
              <li> {"}"} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [4] (spring, mysql, oracle, js) 데이터 비교 </summary>
          <div className='block2'>
            <div className="block4">
              <GridTableCountNRow100px count="5">
                <div> </div>
                <GridColumn> 스프링 </GridColumn>
                <GridColumn> mysql </GridColumn>
                <GridColumn> 자바스크립트 </GridColumn>
                <GridColumn> 오라클 </GridColumn>

                <GridRow> 문자열 </GridRow>
                <GridField> String </GridField>
                <GridField> varchar(255) </GridField>
                <GridField> String </GridField>
                <GridField> VARCHAR2(255 CHAR) </GridField>

                <GridRow> 문자 </GridRow>
                <GridField>  </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>

                <GridRow> 날짜 </GridRow>
                <GridField> Date </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>
                <GridField> TIMESTAMP(6) </GridField>

                <GridRow> 날짜 </GridRow>
                <GridField> LocalDate </GridField>
                <GridField> date <br /> YYYY-MM-DD </GridField>
                <GridField>  </GridField>
                <GridField> TIMESTAMP(6) </GridField>

                <GridRow> 날짜 </GridRow>
                <GridField> LocalDateTime </GridField>
                <GridField> datetime(6) <br /> YYYY-MM-DD <br /> HH:MM:SS  </GridField>
                <GridField>  </GridField>
                <GridField> TIMESTAMP(6) </GridField>

                <GridRow> 시간 </GridRow>
                <GridField>  </GridField>
                <GridField> TIME <br /> HH:MM:SS </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>

                <GridRow> 날짜시간 </GridRow>
                <GridField>  </GridField>
                <GridField> TIMESTAMP <br /> 1970-01-01 <br /> 00:00:01 ~ <br /> 2038-10-19 <br /> 03:14:07 </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>

                <GridRow> 큰 정수 </GridRow>
                <GridField> Long </GridField>
                <GridField> bigint </GridField>
                <GridField>  </GridField>
                <GridField> NUMBER(19,0) </GridField>

                <GridRow> 정수 </GridRow>
                <GridField> Integer </GridField>
                <GridField> int </GridField>
                <GridField>  </GridField>
                <GridField> NUMBER(10,0) </GridField>

                <GridRow> 참,거짓일때 </GridRow>
                <GridField> Boolean </GridField>
                <GridField> TINYINT(1) </GridField>
                <GridField>  </GridField>
                <GridField> NUMBER(1,0) </GridField>

                <GridRow>  </GridRow>
                <GridField>  </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>
                <GridField>  </GridField>

              </GridTableCountNRow100px>
            </div>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [5] JPA 테이블 관계 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 @JoinColumn </h2>
            <div className='block4'>
              <li> @JoinColumn(name="다른테이블명_PK컬럼명") </li>
              <li> @JoinColumn(referencedColumnName) <small> 외래키가 참조하는 대상 테이블의 컬럼명 </small> </li>
              <li> @JoinColumn(foreignKey= unique, nullable insertable updatable columnDefinition table) <small> 외래키 제약조건 설정 </small> </li>
            </div>

            <h2 className='h2'> 📌 @JoinColumns </h2>
            <div className='block4'>
              <li> {' JoinColumn을 여러개 사용할 경우 사용방법 '} </li>
              <li> {' @JoinColumns({ '}
                <li> {' @JoinColumn(), '} </li>
                <li> {' @JoinColumn() '} </li>
              </li>
              <li> {' }) '} </li>
            </div>

            <h2 className='h2'> 📌 @ManyToOne </h2>
            <div className='block4'>
              <li> optional=false(내부조인, 객체에 null이 들어갈수 있음) , optional=true(외부조인, 객체에 null이 들어갈 수 없음, default) </li>
              <li> fetch : FetchType.EAGER(default) , fetch : FetchType.LAZY </li>
              <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
                <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장 </li>
                <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다  </li>
                <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정  </li>
                <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다. </li>
                <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다.  </li>
                <li> CascadeType.ALL : 위에 있는 내용을 모두 적용  </li>
              </li>
              <li> targetEntity <small> 연관된 엔티티의 타입 정보를 설정??, 잘 모르겠다. </small> </li>
            </div>

            <h2 className='h2'> 📌 @OneToMany </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>




          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [6] @OneToOne </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [7] @OneToMany, @ManyToOne </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 일대다와 다대일의 차이 </h2>
            <div className='block4'>
              <li> 둘다 주인은 많은 쪽이다. </li>
              <li>  </li>
              <li>  </li>
            </div>


            <h2 className='h2'> 📌 Member.class </h2>
            <div className='block4'>
              <li> @ManyToOne </li>
              <li> @JoinColumn(name="TEAM_ID") </li>
              <li> private Team team; </li>
            </div>

            <h2 className='h2'> 📌 Team.class </h2>
            <div className='block4'>
              <li> @OneToMany(mappedBy="team") <small> Mebmer 클래스에 Team team을 넣어주어야 한다. </small> </li>
              <li> {' private List<Member> members = new ArrayList<>(); '} </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [8] @ManyToMany </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li>  </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [9] 원하는 데이터만 가져오기 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> <a href="https://gorokke.tistory.com/202" target="_blank" rel="noopener noreferrer">
                참고하기 </a> </li>
              <li>  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 유효성 관련 어노테이션 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 gradle 설정 </h2>
            <div className='block4'>
              <li> implementation 'org.springframework.boot:spring-boot-starter-validation' </li>
            </div>

            <h2 className='h2'> 📌 설명 </h2>
            <div className='block4'>
              <li> @Builder.Default </li>
              <li> @Positive @PositiveOrZero @Negative @NegativeOrZero </li>
              <li> @Size(min=1,max=2) @Min(1) @Max(2) </li>
              <li> @Null </li>
              <li> @NotNull # Null 불가능 </li>
              <li> @NotEmpty # Null, 빈문자열("") 불가능 , " " 은 가능 </li>
              <li> @NotBlank # Null, 빈문자열("") , " " 모두 불가능</li>
              <li> @Pattern(regex="이곳에 정규표현식 작성") </li>
              <li> @Future @FutureOrPresent @Past @PastOrPresent </li>
              <li> @Email </li>
              <li> @AssertTrue @AssertFalse # 값이 항상 true거나 false </li>
              <li> @Digits(integer= 최대허용되는정수자릿수 , fraction = 최대허용되는소수자릿수 ) </li>
              <li> @DecimalMax(value=) @DecimalMin(value=) </li>
              <li> 어노테이션에 추가 속성 : message="에러 날 경우 메시지 표현" </li>
              <li> @Getter: getter 메소드 </li>
              <li> @Setter: setter 메소드, 일반적으로 사용을 하지 않음 </li>
              <li> @org.hibernate.annotations.DynamicUpdate : 엔티티에 선언하며 레코드를 전체 업데이트 하지않고
                일부만 업데이트를 하게 해준다.  </li>
              <li> @NamedQuery(name="ENTITY.Repository메소드명",query="사용자정의쿼리작성") </li>
              <li> @Temporal(TemporalType.TIMESTAMP) # 자바의 날짜 타입 사용 </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 자바스크립트와 스프링 데이터 비교 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 자바스크립트 Axios 👉 스프링  </li>
            <li> new Date() 👉 String <small> "Thu Jan 06 2022 02:54:07 GMT+0900 (한국 표준시)" </small>  </li>
            <li> new Date() 👉 LocalDate ❌ </li>
            <li> new Date() 👉 LocalTime ❌ </li>
            <li> "11.11.11" 👉 LocalDate ❌ </li>
            <li> "[11.11.11]" 👉 LocalDate ❌ </li>
            <li> "11:11:11" 👉 LocalTime ❌ </li>
            <li> "2020-11-11 12:12:12" 👉 @DateTimeFormat(pattern="yyyy-MM-dd'T'HH:mm:ss") ❌ </li>
            <li> "2020-11-11 12:12:12" 👉 @DateTimeFormat(pattern="yyyy-MM-ddTHH:mm:ss") ❌ </li>
            <li> "2020-11-11 12:12:12" 👉 @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss") ✅
              <small> 주의: 생성자,빌더,set으로 받아오는 매개변수에 선언해야한다. , @RequestBody에서 사용 </small> </li>
            <li> "2020-11-11 12:12:12" 👉  </li>
            <li> "2020-11-11 12:12:12" 👉  </li>
            <li>  </li>
            <li>  </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> [] Dto </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 설명 </h2>
            <div className="block4">
              <li> Layer와 Layer사이에서 데이터를 교환하는 객체(DB Layer에서만 사용x)</li>
              <li> 로직이 없는 순수한 객체, 생성자를 만드는데만 사용 </li>
              <li> 로직을 가지지 않고 getter,setter 운반만 하는 역할 </li>
              <li> 근데 setter를 사용하지 않고도 사용하는 경우가 많으므로 setter는 없애도 될것같다.  </li>
              <li>  </li>
            </div>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> ----------------------------------------------------- </summary>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> serialVersionUID </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> private static final long serialVersionUID = 1L; </li>
            <li> Version을 일치시켜주어 Serialize와 Deserialize를 맞춰준다. </li>
            <li> 컴파일러가 계산한 값을 부여하는데 Serializable Class , Outer Class가 변경되면
              serialVersionUID값이 변하게 된다. 값이 다르게 되면 InvalidClassExceptions가 발생한다 </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> JPQL </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 설명 </h2>
            <li> Java Persistence Query Language </li>
            <li> DB쿼리가 아닌 객체지향 쿼리 </li>
            <li> 특정 SQL에 의존하지 않는 쿼리 </li>
            <li> SQL과 쿼리 구조는 비슷해서 사용하기 쉬움 </li>
            <li> SQL쿼리와는 다르게 JPQL는 별칭을 필수로 사용함 </li>
            <li> JPQL 실행 시 쿼리객체(TypedQuery , Query) 생성 필요 </li>

            <h2 className="h2"> 📌 EntityManagerFactory </h2>
            <li> 비용이 비싸서 어플리케이션에서 1개만 만들어서 사용 </li>
            <li> 여러 스레드가 동시에 접근이 가능, 스레드끼리 공유가 가능 </li>
            <li> 어플리케이션이 종료되기전에 닫아주어야 한다. </li>
            <div className="block4">
              <li> EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpabook"); </li>
            </div>

            <h2 className="h2"> 📌 EntityManager </h2>
            <li> 여러 스레드가 동시에 접근이 불가능 </li>
            <li> 스레드간 공유 불가능 </li>
            <li> 사용자의 요청에 1개씩 만들어짐 </li>
            <li> 만들어지는 비용이 비싸지는 않지만 닫아주어야 한다. </li>
            <div className="block4">
              <li> EntityManager em = emf.createEntityManager(); </li>
            </div>

            <h2 className="h2"> 📌 Persistence Context  </h2>
            <li> Entity를 저장하는 환경 </li>
            <li> 논리적인 개념에 가까움</li>
            <li> Persistence Context에 EntityManager가 접근하여 Entity를 관리한다.  </li>
            <div className="block4">
              <img alt="" style={{ width: "60%" }} src={process.env.PUBLIC_URL + '/img/SpringModel/EntityManager.svg'} />
              <li> em.persist(ENTITY_INSTANCE) <small> # 영속성 상태로 만듬 </small> </li>
              <li> em.detach(ENTITY_INSTANCE) <small> # 영속상태를 준영속상태로 만듬 </small> </li>
              <li> em.clear() <small> # Persistence Context 초기화 </small> </li>
              <li> em.close() <small> # Persistence Context 닫음 </small> </li>
              <li> em.merge() </li>
              <li> em.remove(ENTITY_INSTANCE) <small> # 커밋을 해야 비영속 상태로 만듬 - flush() - DB에서 삭제 </small> </li>
              <li> em.flush()
                <div className="block4">
                  <p> em.setFlushMode(javax.persistence.FlushModeType.AUTO) <small> # 기본값, 커밋이나 쿼리 실행할 때 flush() </small> </p>
                  <p> em.setFlushMode(javax.persistence.FlushModeType.COMMIT) <small> # 커밋할 때만 flush() </small> </p>
                </div>
              </li>
              <li> em.find(ENTITY.class, ENTITY_INSTANCE.getId()); <small> # EntityManager에서 Entity의 식별자로 조회 </small> </li>
              <li> EntityTransaction et = em.getTransaction(); <small> #  </small> </li>
              <li> et.begin(); </li>
              <li> et.commit(); </li>
              <li> em.close() <small> # EntityManager를 종료해주어야 한다. </small> </li>
              <li> em.createQuery()
                <div className="block4" style={{ listStyle: "none" }}>
                  <li> TypedQuery{"<ENTITY>"} query = em.createQuery("JPQL_QUERY", ENTITY.class); <small> # 반환 타입이 명확함, 1종류의 엔티티 타입을 반활할 때 </small> </li>
                  <li> Query{"<ENTITY>"} query = em.createQuery("JPQL_QUERY"); <small> # 여러 엔티티나 컬럼을 반환할 때 </small> </li>
                  <li> List{'<ENTITY>'} resultList = query.getResultList(); <small> # 결과가 없으면 빈 컬렉션 반환 </small> </li>
                  <li> ENTITY result = query.getSingleResult(); <small> # 결과가 없거나 결과가 2개이상이면 에러 발생 </small> </li>
                </div>
              </li>
              <li> em.getTransaction().commit(); </li>
            </div>


            <h2 className="h2"> 📌 Select </h2>
            <li> SELECT m FROM User m WHERE m.name =: name <small> # name이라는 파라미터를 넣을 때 </small> </li>
            <li> SELECT m FROM User m where m.name = ?1 <small> # 첫번째 파라미터에 name을 넣을 때 </small> </li>
            <li> SELECT u.name FROM User u <small> # 프로젝션으로 반환값은 {'List<String> name'} 처럼 컬럼값을 반환한다. </small> </li>

            <h2 className="h2"> 📌 Insert </h2>
            <li>  </li>
            <li>  </li>

            <h2 className="h2"> 📌 Delete </h2>
            <li>  </li>
            <li>  </li>


            <h2 className="h2"> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <li> <h3 className="h3"> 🎈 </h3>
                  <li>  </li>
                </li> <br />
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> QueryDSL (설명x) </summary>
          <div className='block2'>

            {/*<h2 className="h2"> 📌 설명 </h2> 
                         <li> 1 </li> 
                         <li> 2 </li> 
                         <li> 3 </li> 
                  
                         <h2 className="h2"> 📌 장점, 단점 </h2> 
                         <li> 장점 : </li> 
                         <li> 단점 : </li> 
                  
                         <h2 className="h2"> ✔ 예시 </h2> 
                         <li> 소제목 
                             <div className='block3'> 
                                <h3 className="h3"> 🎈 </h3> 
                                    <div className='block4'> 
                                    <li>  </li> 
                                    </div> 
                             </div> 
                         </li> */}

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @JoinTable @JoinColumn @ManyToOne @OneToOne @OneToMany @ManyToMany </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 @JoinTable 속성  </h2>
            <li> 조인테이블을 만들어서 연관관계를 설정하는 방법 </li>
            <li> name : </li>
            <li> joinColumns : <small> # 현재 엔티티를 참조하는 외래키 </small> </li>
            <li> inverseJoinColumns : <small> # 다른 엔티리를 참조하는 외래키 </small> </li>
            <div className="block4">
              <li> @JoinTable(
                <li> name="client_role", <small> 매핑 테이블의 테이블명 </small> </li>
                <li> joinColumns = @JoinColumn(name = "client_id"), <small> 현재 엔티티의 컬럼명(default: 엔티티명_필드명) ,client테이블의 id를 외래키로 하여 현재 엔티티를 참조 </small> </li>
                <li> inverseJoinColumns = @JoinColumn(name = "role_id") <small> 참조 엔티티의 컬럼명(default: 엔티티명_필드명) ,role테이블의 id를 외래키로 하여 다른 엔티티를 참조 </small> </li>
              </li>
            </div>

            <h2 className="h2"> 📌 @JoinColumn 속성 </h2>
            <li> 외래키 매핑할 때 사용 </li>
            <li> name : 매핑할 외래키 명 , default = 필드명_참조테이블기본키컬럼명 <small> # name_refname </small> </li>
            <li> referencedColumnName : 외래키가 참조하는 테이블의 컬럼명 </li>
            <li> foreignKey(DDL) : 외래키 제약조건을 직접 작성, 테이블생성시에만 가능? </li>
            <li> unique, nullable, insertable, updatable, columnDefinition, table </li>

            <h2 className="h2"> 📌 @ManyToOne 속성 </h2>
            <li> Many쪽에서 @JoinTable을 선언 </li>
            <li> optional=false (객체에 null이 들어갈수 있음, inner join) , optional=true(default값) (객체에 null이 들어갈 수 없음, outer join) </li>
            <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
              반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
            <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>

            <h2 className="h2"> 📌 @ManyToOne 속성 </h2>
            <li> Many쪽에서 @JoinTable을 선언 </li>
            <li> optional=false (객체에 null이 들어갈수 있음, inner join) , optional=true(default값) (객체에 null이 들어갈 수 없음, outer join) </li>
            <li> fetch=FetchType.EAGER (default값) : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
              반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
            <li> fetch=FetchType.LAZY : 엔티티를 나중에 조회 </li>


            <h2 className="h2"> 📌 @ManyToMany(mappedBy="") 속성 </h2>
            <li> mappedBy : 참조하고 있는 다른엔티티의 필드명을 적어서 매핑 </li>
            <li> optional=false (외부조인) , optional=true (외부조인) </li>
            <li> fetch=FetchType.EAGER : 엔티티 조회할 때 연관된 엔티티도 같이 조회, 객체가 계속 연결되어 있으면 연달아 조회를 함으로 좋지 않음,
              반대로 한꺼번에 조회 함으로 네트워크 비용을 아낄 수 있다는 장점도 존재 </li>
            <li> fetch=FetchType.LAZY (default값) : 엔티티를 나중에 조회 </li>
            <li> cascade=CascadeType.[ALL,PERSIST,MERGE,REMOVE,REFRESH,DETACH]
              <li> CascadeType.PERSIST : 엔티티를 저장하면, 필드에 있는 엔티티도 저장  <small> # 좀더 알아볼것 </small> </li>
              <li> CascadeType.MERGE : 엔티티를 합칠 때, 필드에 있는 엔티티도 합친다 <small> # </small> </li>
              <li> CascadeType.REFRESH : 엔티티를 수정할 때, 필드에 있는 엔티티도 수정 <small> # </small> </li>
              <li> CascadeType.REMOVE : 엔티티를 삭제할 때, 필드에 있는 엔티티도 삭제한다.  <small> # </small> </li>
              <li> CascadeType.DETACH : 엔티티를 detach할때 , 필드에 있는 엔티티도 detach를 한다. <small> # 영속성 컨텍스트에서 엔티티를 제거(엔티티 삭제가 아님) </small> </li>
              <li> CascadeType.ALL : 위에 있는 내용을 모두 적용 <small> # </small> </li> <br />
            </li>

            <h2 className="h2"> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className="h3"> 🎈 Board </h3>
                <div className='block4'>
                  <li> @Table(name="board") </li>
                  <li> public class Board {'{'}
                    <li>  @Id </li>
                    <li>  @GeneratedValue(strategy = GenerationType.AUTO) </li>
                    <li>  @Column(name="id") </li>
                    <li>  private Long id; </li>
                    <li>  </li> <br />
                    <li> @ManyToOne </li>
                    <li> @JoinColumn(name="client_id") <small> # 참조할테이블명_컬럼명 </small> </li>
                    <li> private Client client; </li>
                  </li>
                  <li> {'}'} </li>
                </div>
                <h3 className="h3"> 🎈 Client </h3>
                <div className='block4'>
                  <li> @Table(name="client") </li>
                  <li> public class Client {'{'}
                    <li>  @Id </li>
                    <li>  @GeneratedValue(strategy = GenerationType.AUTO) </li>
                    <li>  private Long id; </li>
                    <li>  </li> <br />

                    <li> {'  @ManyToMany(fetch=FetchType.LAZY, cascade = { '}
                      <li> {'CascadeType.PERSIST, '} </li>
                      <li> {'CascadeType.MERGE '} </li>
                    </li>
                    <li> {'  }) '} </li>
                    <li> {'  @JoinTable( '}
                      <li> {'name="client_role", '} </li>
                      <li> {'joinColumns = @JoinColumn(name = "client_id"), '} </li>
                      <li> {'inverseJoinColumns = @JoinColumn(name = "role_id")) '} </li>
                    </li>
                    <li> {'  private Set<Role> roles = new HashSet<Role>(); '} </li>
                    <li>  </li> <br />

                    <li> {'  @OneToMany(mappedBy="client") '} </li>
                    <li> {'  private Set<Board> boards = new HashSet<Board>(); '} </li>
                    <li>  </li> <br />
                  </li>
                  <li> {'}'} </li>
                </div>
                <h3 className="h3"> 🎈 Role </h3>
                <div className='block4'>
                  <li> @Id </li>
                  <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                  <li> private Long id; </li>
                  <li> private String name; </li>
                  <li>  </li> <br />

                  <li> {' @ManyToMany(mappedBy = "roles") '} </li>
                  <li> {' private Set<Client> clients = new HashSet<Client>(); '} </li>
                  <li>  </li> <br />

                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @ManyToMany </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 설명 </h2>
            <li> 다대다 관계 매핑 </li>
            <li> 2 </li>
            <li> 3 </li>

            <h2 className="h2"> 📌 장점, 단점 </h2>
            <li> 장점 : </li>
            <li> 단점 : </li>

            <h2 className="h2"> ✔ 예시 </h2>
            <li> Client와 Role을 다대다 매핑한 예시
              <div className='block3'>
                <h3 className="h3"> 🎈 Client </h3>
                <li> @Table(name="client") </li>
                <li> public class Client {'{'}
                  <li>  </li> <br />
                  <li> @Id </li>
                  <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                  <li> private Long id; </li>
                  <li> private String username; </li>
                  <li> private String password; </li>
                  <li> private Boolean enabled=true; </li> <br />
                  <li> @ManyToMany(cascade = {'{'}
                    <li> CascadeType.PERSIST, </li>
                    <li> CascadeType.MERGE </li>
                  </li>
                  <li> {'})'} </li>
                  <li> @JoinTable(
                    <li> name="client_role", <small> 매핑 테이블의 테이블명 </small> </li>
                    <li> joinColumns = @JoinColumn(name = "client_id"), <small> client테이블의 id를 외래키로 하여 현재 엔티티를 참조 </small> </li>
                    <li> inverseJoinColumns = @JoinColumn(name = "role_id")) <small> role테이블의 id를 외래키로 하여 다른 엔티티를 참조 </small> </li>
                  </li>
                  <li> private Set{'<Role>'} roles = new HashSet{'<Role>'}(); </li>
                </li>
                <li> {'}'} </li>
                <h3 className="h3"> 🎈 Role </h3>
                <li> @Table(name="role") </li>
                <li> public class Role {'{'}
                  <li>  </li> <br />
                  <li> @Id </li>
                  <li> @GeneratedValue(strategy = GenerationType.AUTO) </li>
                  <li> private Long id; </li>
                  <li> private String name="ROLE_USER"; </li>
                  <li>  </li> <br />
                  <li> @ManyToMany(mappedBy="roles") <small> Client(Entity)의 field roles를 참조하여 role_id 컬럼명에 Role 엔티티의 id를  매핑 </small> </li>
                  <li> private Set{'<Client>'} clients = new HashSet{'<Client>'}(); </li>
                </li>
                <li> {'}'} </li>
              </div>
            </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> @NamedEntityGraph @EntityGraph (좀더 알아볼것) </summary>
          <div className='block2'>

            <h2 className="h2"> 📌 @NamedEntityGraph 속성 </h2>
            <li> 엔티티 클래스 위에 선언을 하여 사용 </li>
            <li> 엔티티 그래프를 둘 이상 사용할 경우 사용 </li>
            <li> name="엔티티클래스명.변수명" <small> # 엔티티 그래프 이름을 정의 </small> </li>
            <li> attributeNodes = @NamedAttributeNode("필드명") <small> # 함께 조회할 속성 선택 </small> </li>
            <li>  </li>
            <h2 className="h2"> 📌 @EntityGraph 속성 </h2>
            <li> Repositoy클래스의 메소드 위에 선언하여 사용 </li>
            <li> EntityGraph 로딩 정책을 가져와서 적용 </li>
            <li> fetch가 lazy로 되어있어도 EntityGraph를 이용하면 같이 조회 가능 </li>
            <li> @EntityGraph(value="엔티티클래스명.변수명") </li>
            <li> @EntityGraph(attributePaths={'{"AttributeNode에 명시된 필드명"}'}) </li>
            <li> @EntityGraph("엔티티클래스명.변수명") </li>

            <h2 className="h2"> ✔ 예시 </h2>
            <li> 소제목
              <div className='block3'>
                <h3 className="h3"> 🎈 </h3>
                <li> @EntityGraph(attributePaths = {'{"엔티티필드명"},'} type = EntityGraph.EntityGraphType.LOAD) </li>
                <div className='block4'>
                  <li>  </li>
                </div>
              </div>
            </li>

          </div>
        </details>
      </div>

    </div>
  );
}

export default SpringModel;