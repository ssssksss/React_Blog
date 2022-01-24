import React from 'react';

const LinuxAccountCommand = (props) => {
    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> passwd <small> # 사용자 비번 관련 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> passwd [사용자명] <small> # 사용자 비번 변경 </small> </li>
                        <li> vi /etc/passwd <small> # 사용자 비번 정보 저장 </small>
                            <div className="block4">
                                <li> [사용자명]:[암호]:[UID]:[GID]:[comment]:[사용자홈디렉토리]:[기본사용셸] </li>
                                <li> 암호가 x이면 /etc/shadow 파일에 비번이 저장되어 있음 </li>
                                <li> 기본사용셸은 기본적으로 /bin/bash </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> adduser, useradd <small> # 계정을 추가 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> [adduser, useradd] [사용자명] <small> # 사용자 추가 </small> </li>
                        <li> [adduser, useradd] -u [UID] <small> # 사용자 UID 지정 </small> </li>
                        <li> [adduser, useradd] -g [GID] <small> # 사용자 GID 지정 </small> </li>
                        <li> [adduser, useradd] -d [/홈디렉토리] <small> # 사용자 홈 디렉토리 지정</small> </li>
                        <li> [adduser, useradd] -m -d [/홈디렉토리] <small> # 사용자 홈 디렉토리를 생성해서 지정</small> </li>
                        <li> [adduser, useradd] -s [/사용자셸] <small> # 기본 사용자 셸 지정 </small> </li>
                        <li> [adduser, useradd] -c [설명] [사용자명] <small> # 사용자에게 설명 추가 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> id <small> # 현재 사용자의 정보 보기 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> id <small> # </small> </li>
                        <li> cat /etc/passwd <small> # </small> </li>


                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> su sudo <small> # 현재 연결된 계정 변경하기 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> su <small> # root 계정 변경 </small> </li>
                        <li> su [사용자명] <small> # 사용자 계정 변경 </small> </li>

                        <h2 className='h2'> 📌 root이외의 계정에서 sudo명령어 사용할 수 있게 하기 </h2>
                        <div className="block4">
                            <li> su로 root계정에 접근 </li>
                            <li> visudo -f /etc/sudoers </li>
                            <li> 100번째 쯤에 root ALL=(ALL) ALL 같이 </li>
                            <li> [사용자명] ALL=(ALL) ALL 입력 </li>
                            <li> 만약에 사용자에게 sudo권한이 필요없다면 다시 없애주기 </li>
                        </div>
                        <div className="block4">
                            <li> 위에 방법이 더 간편하다. </li>
                            <li> su로 root계정에 접근 </li>
                            <li> cd /etc </li>
                            <li> chmod u+w sudoers </li>
                            <li> vi /etc/sudoers 입력 </li>
                            <li> 100번째 쯤에 root ALL=(ALL) ALL 같이 </li>
                            <li> [사용자명] ALL=(ALL) ALL 입력 </li>
                            <li> chmod u-w sudoers </li>
                            <li> 만약에 사용자에게 sudo권한이 필요없다면 다시 없애주기 </li>
                        </div>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> change <small> # 리눅스 사용자 계정 암호 주기적 변경 설정하기 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> change -l [사용자명] <small> # 사용자 계정에 설정된 비밀번호 정보 보기 </small> </li>
                        <li> change -E YYYY/MM/DD [사용자명] <small> # 사용자 계정 비번 만료 설정 </small> </li>
                        <li> change -m [DAY] [사용자명] <small> # 사용자 계정 비번 변경 최소날짜 설정?, 이해가 잘.. </small> </li>
                        <li> change -M [DAY] [사용자명] <small> # 사용자 계정 비번 변경없이 사용가능 만료일 설정 </small> </li>
                        <li> change -W [DAY] [사용자명] <small> # 사용자 계정 비번 만료일 [DAY]전에 메시지를 보여준다. </small> </li>
                        <li> change -I [DAY] [사용자명] <small> # 사용자 계정 변경 만료일 [DAY]가 지나면 계정을 잠근다. </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> usermod <small> # 사용자 정보를 변경 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> usermod [사용자] -c [바꿀사용자명] <small> # 사용자명을 바꾸기 </small> </li>
                        <li> usermod -d [/디렉토리] [사용자] <small> # 사용자 디렉토리 변경 </small> </li>
                        <li> usermod -s [셸] [사용자] <small> #  </small> </li>
                        <li> usermod -c [설명] [사용자] <small> # 사용자 설명 변경 </small> </li>
                        <li> usermod -e [YYYY-MM-DD] [사용자] <small> # 계정이 특정 날짜에 만료되게 설정 </small> </li>
                        <li> usermod -g [그룹] [사용자] <small> # 사용자의 그룹을 변경 </small> </li>
                        <li> usermod -G [그룹] [사용자] <small> # </small> </li>
                        <li> usermod -a -G [그룹] [사용자] <small> # 사용자에 그룹을 추가 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> userdel <small> # 사용자를 제거 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> userdel [사용자명] </li>
                        <li> userdel -r [사용자명] <small> # 사용자가 사용하는 디렉터리까지 전부 삭제 </small> </li>



                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> gpasswd <small> # 그룹에 비번설정,사용자추가,관리자지정 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> gpasswd [그룹명] <small> # 그룹에 비번을 설정한다. </small> </li>
                        <li> gpasswd -a [사용자명] [그룹명] <small> # 그룹에 사용자를 추가한다. </small> </li>
                        <li> gpasswd -A [사용자명] [그룹명] <small> # 그룹의 관리자로 사용자를 지정 </small> </li>
                        <li> gpasswd -d [사용자명] [그룹명] <small> # 그룹에서 사용자 제거하기 </small> </li>
                        <li> gpasswd -r <small> # 그룹에 설정된 패스워드 제거 </small> </li>
                        <li> gpasswd -R [그룹명] <small> # 그룹 사용 금지 </small> </li>
                        <li> gpasswd -M [사용자명] [그룹명] <small> # 그룹 사용자를 초기화하고 사용자를 추가 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> groupadd <small> # 그룹을 추가 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> groupadd [그룹명] <small> # 그룹명을 추가 </small> </li>
                        <li> groupadd -g [GID] [그룹명] <small> # 그룹명에 GID를 지정해서 추가, 기존 GID 확인 필요 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> groupmod <small> # 그룹의 이름을 변경 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> groupmod -g [새로운그룹GID] [이전그룹GID] <small> # 그룹GID 변경하기 </small> </li>
                        <li> groupmod -n [새로운그룹명] [이전그룹명] <small> # 그룹명 변경하기 </small> </li>
                        <li> groupmod -o <small> # 그룹 GID 중복허용, 사용할 때 알아볼것 </small> </li>
                        <li> vi /etc/group  <small> # 등록되어 있는 그룹 보기 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> groupmems <small> # 그룹 사용자를 관리 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> groupmems -g [그룹명] -l <small> # 그룹에서 사용자들을 조회 </small> </li>
                        <li> groupmems -g [그룹명] -a [사용자] <small> # 그룹에서 사용자를 추가 </small> </li>
                        <li> groupmems -g [그룹명] -d [사용자] <small> # 그룹에서 사용자를 제거 </small> </li>
                        <li> vi /etc/group <small> # 그룹 정보 편집 가능 </small>
                            <div className="block4">
                                <li> [그룹명]:x:[GID]: <small> # 이와같이 입력 </small> </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> groupdel <small> # 그룹을 삭제 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> groupdel [그룹명] <small> # 그룹을 삭제 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> groups <small> # 현재 사용자가 속한 그룹 조회 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 명령어 </h2>
                        <li> groups <small> # 현재 사용자가 속한 그룹 조회 </small> </li>
                        <li> cat /etc/group <small> # 현재 사용자가 속한 그룹 조회 </small> </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> chmod 명령어 <small> # 파일 사용권한 변경 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 chmod [옵션] [모드] [파일명] </h2>
                        <small> 퍼미션 = #소유자(u)/그룹(g)/게스트(o),모두(a) 777 = r(4),w(2),x(1) , t(Sticky bit) , X(실행권한적용) , s(SUID) </small>
                        <li> chmod 퍼미션(755) 파일명 , 파일명에 권한을 준다. </li>
                        <li> chmod ugo+rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 준다.  </li>
                        <li> chmod ugo=rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 지정  </li>
                        <li> chmod ugo-rwx 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 제거한다.  </li>
                        <li> chmod ug=w,o=r 파일명 , #파일에 user,group,other 사용자에게 r(읽기),w(쓰기),x(실행) 권한을 제거한다.  </li>
                        <li> chmod 퍼미션(775) * , #현재 위치한 파일에 모두 접근 권한 부여 </li>
                        <li> chmod 퍼미션(1775) * , #현재 위치한 파일에 모두 접근 권한 부여 , 단 소유자만이 삭제가능(Sticky bit)  </li>
                        <li> chmod 퍼미션(4775) * , #현재 위치한 파일에 모두 접근 권한 부여 ,
                            SUID, {'유저 -> 파일1 (가능)'} | {'유저 -> 파일2(불가능)'} | {'유저->파일1->파일2(가능하게 해줌)'} 실행 권한이 없을때 다른 파일을 거쳐서 실행을 가능하게 해준다. </li>
                        <li> chmod -R 퍼미션 디렉토리 , #디렉토리 하위에 위치한 모든 파일 접근 권한 부여 </li>
                        <li> chmod -c 퍼미션 파일명 : 기존 파일 모드가 변경되는 경우만 진단 메시지 출력 </li>
                        <li> chmod -f 퍼미션 파일명 : 에러 메시지를 출력하지 않음 </li>
                        <li> chmod -v 퍼미션 파일명 : 모든 파일에 대해 모드가 적용되는 진단 메시지 출력 </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> chown 명령어 <small> # 파일,디렉토리의 소유자 변경 </small> </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> chown [소유자] [파일명] , # 파일의 소유자를 변경하는 방법 </li>
                        <li> chown [소유자]:[소유그룹] 변경할파일 , # 파일의 소유자,소유그룹을 변경하는 방법 </li>
                        <li> chown -R [소유자]:[소유그룹] [디렉토리] , # 하위 디렉토리도 변경</li>
                        <li> chown -h [소유자] [심볼릭링크] , # 심볼릭 링크의 소유자를 변경  </li>

                    </div>
                </details>
            </div>

        </div>
    );
}

export default LinuxAccountCommand;