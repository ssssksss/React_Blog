import React from 'react';

const LinuxNetwork = (props) => {

  return (
    <div className="common_style">

      <div className='block1'>
        <details>
          <summary> CentOS IP설정, 고정 IP 만드는 방법 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> vi /etc/sysconfig/network-scripts/ifcfg-ens33 <small> # 뒤에 숫자는 다를 수 있으므로 확인해보기 </small>
              <div className="block4">
                <li> BOOTPROTO=static <small> # [static=IP고정, dhcp=동적, bootp=?, none] </small> </li>
                <li> PREFIX=24 <small> # #24까지가 네트워크 대역이다라고 알려주는것, 서브넷 마스크? </small> </li>
                <li> IPADDR=[고정할IP주소] <small> # (ex 192.168.10.20), 고정할 IP주소 </small>  </li>
                <li> DNS1=[DNS서버주소] <small> # (ex 8.8.8.8, 168.126.63.1) </small> (ex 168.126.63.1) </li>
                <li> GATEWAY=[게이트웨이주소] <small> # (ex 192.168.10.2), 게이트웨이 주소 </small> </li> <br />

                <li> ONBOOT=yes <small> # 부팅시 설정 활성화 여부 </small> </li>
                <li> BROADCAST=@.@.@.255 <small> # 브로드캐스드 주소 </small> </li>
                <li> DEVICE=ens33 <small> # 대충 느낌으로는 알겠지만 잘 모르겠다. </small> </li>
                <li> HWADDR=@:@:@:@:@:@ <small> MAC주소 </small> </li>
                <li> NETMASK <small> # 넷마스크 주소 </small> </li>
                <li> NETWORK <small> # 네트워크 주소 </small> </li>
                <li> PEERDNS=yes <small> # dhcp서버의 dns정보를 resolv.conf에 저장할지 말지 </small> </li>
                <li> DNS1 </li>
                <li> DNS2 </li>
                <li> USERCTL=no <small> # 일반 유저가 설정 가능 여부 </small> </li>
              </div>
            </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 네트워크 설정 </summary>
          <div className='block2'>
            <h2 className='h2'> 📌 설명 </h2>
            <li> systemctl restart network <small> # 네트워크 재시작 </small>  </li>
            <li> ping [IP주소] <small> # IP주소로 ping을 보내서 인터넷이 연결이 되었는지
              확인하는 방법 , 168.126.63.1(KT) </small>  </li>
            <li> ifconfig <small> # 네트워크 인터페이스 정보 확인 </small> </li>
            <li> ip route <small> # 본인 컴퓨터의 ip만 출력 </small>  </li>
            <li> ip addr <small> #  </small>  </li>
            <li> vi /etc/resolv.conf <small> # nameserver 설정파일 </small> </li>
            <li> netstat -lntp <small> #  </small>  </li>
            <li> netstat -antp <small> #  </small>  </li>
            <li> netstat -antp | grep LISTEN <small> #  </small>  </li>
          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> 방화벽 설정 </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 방화벽  </h2>
            <div className="block4">
              <li> firewall-cmd --reload <small> # 방화벽 적용(변경할 때 마다 사용) </small> </li>
              <li> firewall-cmd --state <small> # 방화벽 상태 </small> </li>
              <li> firewall-cmd --list-ports <small> # 방화벽 개방 목록 </small> </li>
              <li> firewall-cmd --list-all <small> # 방화벽 설정 상태 </small> </li>
              <li> firewall-cmd --get-zones  <small> # </small> </li>
              <li> firewall-cmd --list-all-zones <small> # </small> </li>
              <li>  <small> # </small> </li>
              <li> systemctl start firewalld <small> # 방화벽 시작 </small> </li>
              <li> systemctl enable firewalld <small> # 재부팅시 자동 설정 </small> </li>
              <li> systemctl stop firewalld <small> # 방화벽 중지 </small> </li>
              <li> systemctl disable firewall <small> # 재부팅시 자동 설정x </small> </li>
            </div>

            <h2 className='h2'> 📌 방화벽 허용 </h2>
            <div className="block4">
              <li> firewall-cmd --permanent --add-port=[포트번호]/[프로토콜(ex) tcp] <small> # 방화벽 포트번호 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-port=[포트번호 포트번호-포트번호]/[프로토콜(ex) tcp)] </li>
              <li> firewall-cmd --permanent --add-service=[서비스명(ex) http https] </li>
              <li> firewall-cmd --permanent --remove-service=[서비스명] </li>
              <li> firewall-cmd --permanent --add-source=[IP주소]  <small> # 특정 IP 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-source=[IP주소]  <small> # 특정 IP 제거 </small> </li>
              <li> firewall-cmd --permanent --add-source=[IP주소/서브넷마스크]  <small> # 특정 IP대역 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-source=[IP주소/서브넷마스크]  <small> # 특정 IP대역 제거 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] reject' <small> # 특정IP 접근 막기 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] drop' <small> # 특정IP 접근 막기 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] reject' <small> # 특정IP 접근 막기 제거 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] drop' <small> # 특정IP 접근 막기 제거 </small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP에 특정Port 허용</small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP에 특정Port 허용 제거</small> </li>
              <li> firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address=[IP주소/서브넷마스크] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP대역에 특정Port 허용 </small> </li>
              <li> firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address=[IP주소/서브넷마스크] port port=[포트번호] protocol="tcp" accept' <small> # 특정IP대역에 특정Port 허용 제거 </small> </li>
            </div>

            <h2 className='h2'> 📌 방화벽 관련 에러 </h2>
            <div className="block4">
              <li className="col_red"> 에러 : FirewallD is not running </li>
              <li className="col_blue"> 해결 : systemctl start firewalld </li>
            </div>

            <h2 className='h2'> 📌 방화벽 설정 파일? </h2>
            <div className="block4">
              <li> vi /usr/lib/systemd/system/firewalld.service </li>
            </div>


          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> SELinux </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> sestatus <small> # selinux 모드 확인 </small>   </li>
            <li> vi /etc/selinux/config
              <li> SELINUX=[disabled, enforcing] <small> # 영구적용 </small> </li>
            </li>
            <li> setenforce [0,1] <small> # 0은 끄기, 1은 켜기, 재부팅하면 다시 활성화 </small> </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> httpd </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 관련 명령어 </h2>
            <li> rpm -qa httpd <small> # httpd 버전 확인 </small> </li>
            <li> yum install -y httpd <small> # httpd 설치 </small> </li>
            <li> systemctl status httpd, systemctl status httpd.service <small> # httpd 서비스 상태 확인 </small> </li>
            <li> apachectl configtest <small> # Syntax Error 점검 </small> </li>
            <li>  </li>

          </div>
        </details>
      </div>

      <div className='block1'>
        <details>
          <summary> iptables 명령어 - <small> # 포트포워딩 설정 </small> </summary>
          <div className='block2'>

            <h2 className='h2'> 📌 설명 </h2>
            <li> 리눅스에서 방화벽을 설정하는 도구이며 패킷필터링과 처리방식을 지원 </li>
            <li> INPUT, FORWARD, OUTPUT : 서버로 들어오는것, 서버에서 포워딩하는것, 서버에서 나가는것 </li>
            <li> SNAT와 DNAT : SNAT는 내부사설IP에서 외부공인IP로 변환, DNAT는 외부공인IP를 내부사설IP로 변환 </li>
            <li> NEW(새로접속시도패킷), ESTABLISHED(접속한상태에있는패킷), INVALID(유효하지않은패킷), RELATED(접속과연관된패킷) </li>
            <li> DROP, ACCEPT <small> # 규칙에 맞는 패킷을 어떻게 할지 </small> </li>

            <h2 className='h2'> 📌 설명 </h2>
            <li> rpm -qa | grep iptables <small> # iptables 설치 확인 </small> </li>
            <li> systemctl enable iptables </li>
            <li> systemctl start iptables </li>
            <li> systemctl status iptables </li>
            <li>  </li>
            <li> iptables -F <small> # 설정 초기화 </small> </li>
            <li> iptables -N <small> # 새로운 제안생성 </small> </li>
            <li> iptables -L <small> # 새로운 규칙 출력, 목록 출력 </small> </li>
            <li> iptables -X <small> # 비어있는 체인 삭제 </small> </li>
            <li> iptables -P <small> # 기본 정책 변경 </small> </li>
            <li> iptables -A [INPUT]<small> # 새로운 규칙을 맨 아래 추가 </small> </li>
            <li> iptables -I <small> # 새로운 규칙을 삽입 맨 앞에 추가 </small> </li>
            <li> iptables -R <small> # 새로운 규칙을 교체 </small> </li>
            <li> iptables -D <small> # 규칙을 삭제 </small> </li>
            <li> iptables -C <small> # 패킷을 테스트 </small> </li>
            <li> iptables -s [IP주소] <small> # 출발지 주소 </small> </li>
            <li> iptables -d [IP주소,] <small> # 목적지 주소 </small> </li>
            <li> iptables -p [TCP, ] <small> # 프로토콜 </small> </li>
            <li> iptables -i <small> # 패킷이 들어오는 네트워크 인터페이스 </small> </li>
            <li> iptables -o <small> # 패킷이 나가는 네트워크 인터페이스 </small> </li>
            <li> iptables -f <small> # 분절된 패킷? </small> </li>
            <li> iptables -j [DROP, ACCEPT]<small> # 규칙에 맞는 패킷을 어떻게 처리할지 명시 </small> </li>
            <li> recent --update --seconds [초] --hitcount [카운트] --name HTTP
              <small> # 몇초 동안 똑같은 곳에서 온다면(여러번 접속시도하면 공격으로 인식하게하여 드랍) </small> </li>
            <li> --sport [포트번호] <small> # 출발지 포트번호 </small> </li>
            <li> --dport [포트번호, :포트번호(포트번호이하?미만?)] <small> # 목적지 포트번호 </small> </li>
            <li> --tcp-flags [SYN,RST,ACK] [SYN,RST,ACK] <small> # TCP플래그에 따라 패킷을 제어 </small> </li>
            <li> -m state --state [NEW, ESTABLISHED, INVALID RELATED] <small> # 패킷의 상태와 목적에 따라 제어 </small> </li>
            <li>  </li> <br />

            <li> vi /etc/sysconfig/iptables
              <li> -A PREROUTING -i eth0 -p tcp -m tcp --dport [포워딩서버포트주소] -j DNAT --to-destination [타겟서버IP와포트번호] </li>
              <li>  </li>
            </li>
            <li> /etc/init.d/iptables restart </li>

            <h2 className="h2"> 📌 예시 </h2>
            <li> iptables -t nat -A PREROUTING -p tcp --dport [포트1] -j REDIRECT --to-port [포트2] <small> # 포트1을 포트2로 포워딩 </small> </li>
            <li> iptables -t nat -D PREROUTING -p tcp --dport [포트1] -j REDIRECT --to-port [포트2] <small> # 포트1을 포트2로 포워딩 한 것을 삭제 </small> </li>
            <li> iptables -I INPUT -p tcp -s 0.0.0.0/0 -d [IP주소] --dport [포트] -j ACCEPT <small> # 모든곳에서 오는 IP주소:포트로 오는 패킷 허용  </small> </li>
            <li> iptables -I FORWARD -m tcp -p tcp -d [IP주소] --dport [포트] -j ACCEPT <small> # 호스트에서 IP주소:포트로 포워딩 허용 </small> </li>
            <li> iptables -I FORWARD -m state -p tcp -d [IP주소/서브넷] --state NEW,RELATED,ESTABLISHED -j ACCEPT <small> # NEW,RELATED,ESTABLISHED 상태인 패킷에 대해서는 포워드 허용 </small> </li>
            <li> iptables -t nat -I PREROUTING -p tcp -d [IP주소1] --dport [포트1] -j DNAT --to-destination [IP주소2:포트2] <small> # IP1:포트1으로 들어오는 패킷을 IP2:포트2로 보낸다 </small>   </li>
            <li> iptables -t nat -nL <small> # 내부 테이블을 조회 </small> </li>
            <li> iptables -l INPUT 1 -p tcp --dport [포트] -j ACCEPT <small> # </small>  </li>
            <li> iptables --list </li>
            <li>  </li>

          </div>
        </details>
      </div>

    </div>
  );
}

export default LinuxNetwork;