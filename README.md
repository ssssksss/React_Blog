## API Specification

### Table of Contents

#### Auth
1. [회원 가입](#회원가입)
2. [로그인](#로그인)
3. [이메일 중복 체크](#이메일-중복-체크)
3. [닉네임 중복 체크](#닉네임-중복-체크)
4. [비밀번호 변경하기](#비밀번호-변경하기)
5. [access 토큰 재발급 (회원 재접속/새로고침 시)](#access-토큰-재발급)
#### User
1. [회원 상세 조회](#회원-상세-조회)
2. [회원 정보 수정](#회원-정보-수정)
3. [회원 탈퇴](#회원-탈퇴)
#### Place
1. [맛집 리스트 조회](#맛집-리스트-조회)
2. [맛집 상세 조회](#맛집-상세-조회)
3. [맛집 추가](#맛집-추가)
4. [맛집 정보 수정](#맛집-정보-수정)
5. [맛집 삭제](#맛집-삭제)
#### Upload
사진 업로드 - 파라미터에 type> user, place


### Auth
#### [1]회원가입
|Method|Endpoint|
|:---:|:---:|
**<span style="color:orange">POST</span>**|`/auth/signup`|
<br>

**Request Header**
|Header|Required|description|
|:---:|:---:|:---:|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|nickname|✅|String|소셜로그인한 계정일 경우 랜덤값으로 [root]@[임의의 해쉬값] 생성|
|email|✅|String|id@domain으로 이루어졌는지 확인한다|
|password|✅|String|8자 이상|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string|Sign up Success|

**2. `400` Bad Request**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|400|
|msg|string|Please type required contents|
|error|object|하단 참조|

**Error**
|Field|Type|Description|
|:---:|:---:|:---|
|fieldName|string|에러의 원인이 되는 필드|
|errorMessage|string|에러 메시지에 대한 설명|

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|successFlag|boolean|성공이면 TRUE, 실패면 FALSE|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [2]로그인
|Method|Endpoint|
|:---:|:---:|
**<span style="color:orange">POST</span>**|`/auth/signin`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|email|✅|String||
|password|✅ |String||
|location|✅|String|null이면 최초 로그인으로 인식 |
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string|Sign In Success|
|data|object|하단 참조|

**Data**
|Field|Type|Description|
|:---:|:---:|:---|
|accessToken|string|jwt 형식을 따름|
|refreshToken|string|jwt 형식을 따름|

**2. `400` Bad Request**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|400|
|msg|string|Please type required contents|
|error|object|하단 참조|

**Error**
|Field|Type|Description|
|:---:|:---:|:---|
|fieldName|string|에러의 원인이 되는 필드|
|errorMessage|string|에러 메시지에 대한 설명|

**3. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string|Please check email and password|

**4. `403` Forbidden 권한 때문에 거절??? **
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|403|
|msg|string|Forbidden|

**5. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [3]이메일 중복 체크
|Method|Endpoint|
|:---:|:---:|
**<span style="color:green">GET</span>**|`/auth/email/duplication`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|email|✅|String||
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string|Email Success|

**2. `409` Conflict**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|409|
|msg|string|Already existed email|

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [4]닉네임 중복 체크
|Method|Endpoint|
|:---:|:---:|
**<span style="color:green">GET</span>**|`/auth/nickname/duplication`|


<br>

[Top](#table-of-contents)


#### [5]비밀번호 변경하기
|Method|Endpoint|
|:---:|:---:|
**<span style="color:skyblue">PUT</span>**|`/auth/password`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|password|✅|String||
|newPassword|✅|String||
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Password Success|

**2. `409` Conflict**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|409|
|msg|string|Same password used before|

**3. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string|Wrong input for existed password |

**4. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [6]access 토큰 재발급
|Method|Endpoint|description|
|:---:|:---:|:---:|
**<span style="color:orange">POST</span>**|`/auth/token/validation`||

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
|refreshToken| ✅ |bearer token|
<br>

**Request Body**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Provide Access Token Success|
|data|object| 하단 참조|

**Data**
|Field|Type|Description|
|:---:|:---:|:---|
|accessToken|string|jwt 형식을 따름|
|refreshToken|string|jwt 형식을 따름|


**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

### User
#### [7]회원 상세 조회
|Method|Endpoint|
|:---:|:---:|
**<span style="color:green">GET</span>**|`/user`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Get User Info Detail Success|
|data|object| 하단 참조|

**Data**
|Field|Type|Description|
|:---:|:---:|:---|
|address|string||
* 이름, 게시물 개수, ... 등의 확장성 고려

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [8]회원 정보 수정
|Method|Endpoint|
|:---:|:---:|
**<span style="color:skyblue">PATCH</span>**|`/user`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|imageUrl|✅|string|프로필 이미지 path 정보|
|nickname|✅|string|닉네임|
|address|✅|string|장소 정보 |
* 남겨놓기, 수정된 정보 응답
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Modify User Info Detail Success|
|data|object| 하단 참조|

**Data**
|Field|Type|Description|
|:---:|:---:|:---|
|email|string||
|nickname|string||
|address|string||

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [9]회원 탈퇴
|Method|Endpoint|
|:---:|:---:|
**<span style="color:red">DELETE</span>**|`/user`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|Password|✅|String|check 위한.. |

<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Delete User Success|

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

### Place
#### [10]맛집 리스트 조회
|Method|Endpoint|
|:---:|:---:|
**<span style="color:green">GET</span>**|`/place`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Description|
|:---:|:---:|:---:|:---|
|List[Name]||string|이름으로 검색, 기본 API 방식은 access Token에 있는 userId로 검색하기|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Get place Info Success|
|data|List[PlaceVM]| 하단 참조|

**PlaceVM**
|Field|Type|Description|
|:---:|:---:|:---|
|placeId|number|
|category|number|
|name|string||
|longitude|number|not required?|
|latitude|number|not required?|
|address|string||
|profile_url|string||
|vibe|string||

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [11]맛집 상세 조회
|Method|Endpoint|
|:---:|:---:|
**<span style="color:green">GET</span>**|`/place/{placeId}`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Get place Info Success|
|data|PlaceVM| 하단 참조|

**PlaceVM**
|Field|Type|Description|
|:---:|:---:|:---|
|placeId|number|
|category|number|
|name|string||
|longitude|number|
|latitude|number|
|address|string||
|vibe|string||
|rate|number|||
|profileUrl|string| |

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [12](개인)맛집 추가
|Method|Endpoint|
|:---:|:---:|
**<span style="color:orange">POST</span>**|`/place`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
|category|✅|number|||
|name|✅|string|||
|longitude|✅|number|||
|latitude|✅|number|||
|address|✅|string||||
|vibe||string||합의 필요|
|rate||number|| |

<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Add User Info Detail Success|
|data|object| 하단 참조|

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [13]맛집 정보 수정
|Method|Endpoint|
|:---:|:---:|
**<span style="color:skyblue">PUT</span>**|`/place/{placeId}`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Body**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
|placeId|✅|number|||
|category|✅|number|||
|name|✅|string|||
|longitude|✅|number|||
|latitude|✅|number|||
|address|✅|string||||
|vibe||string|||
|rate||number|| |
|description||string|||

<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Modify User Info Detail Success|
|data|PlaceVM| 하단 참조|

**PlaceVM**
|Field|Type|Description|
|:---:|:---:|:---|
|placeId|number|
|category|number|
|name|string||
|longitude|number|
|latitude|number|
|address|string||
|vibe|string|합의 필요|

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)

#### [14]맛집 삭제
|Method|Endpoint|
|:---:|:---:|
**<span style="color:RED">DELETE</span>**|`/place/{placeId}`|
<br>

**Headers**
|Header|Required|description|
|:---:|:---:|:---:|
|Authorization| ✅ |bearer token|
|Content-Type| ✅ |application/json|
<br>

**Request Parameters**
|Field|Required|Type|Length|Description|
|:---:|:---:|:---:|:---:|:---|
<br>

**Response Body**

**1. `200` OK**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|200|
|msg|string| Delete place Info Success|

**2. `401` Unauthorized**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|401|
|msg|string| Invalid access Token |

**3. `500` Internal Server Error**
|Field|Type|Description|
|:---:|:---:|:---|
|statusCode|number|500|
|msg|string|Internal Server Error|
<br>

[Top](#table-of-contents)