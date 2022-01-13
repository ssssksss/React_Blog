import React, { useEffect, useRef } from 'react';

const SpringController = (props) => {

    return (
        <div className="common_style">

            <div className='block1'>
                <details>
                    <summary> @Controller(미완성) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> Spring 2.5에서 추가 </li>
                        <li> @Componenet 주석이 달려있음 </li>
                        <li> Model 객체를 이용하여 데이터를 담고 view를 찾아 이동하는 역할</li>
                        <li> Controller는 반환값이 text/html이다 </li>
                        <li></li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @RestController </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> @RestController = @Controller + @ResponseBody </li>
                        <li> Spring 4.0에서 추가 </li>
                        <li> 객체로 반환하고 JSON이나 XML형식으로 http에 담아서 응답 </li>
                        <li> @Controller와 다르게 요청을 하면 응답을 보내줌 </li>
                        <li> 매개변수에 @RequestBody를 사용하면 알아서 매핑을 해준다. </li>
                        <li>  </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <h3 className='h3'> 🎈</h3>
                            <div className='block4'>
                                <li> {' @RestController '} </li>
                                <li> {' public class UserController { '}
                                    <li> {' @RequestMapping(value="/auth/signup", method=RequestMethod.POST) '} </li>
                                    <li> {' public HashMap<String,Object> Signup(@RequestBody UserDto data) { '}
                                        <li> {' HashMap<String,Object> userDto = new HashMap<String,Object>(); '} </li>
                                    </li>
                                    <li> {' return userDto; '} </li>
                                    <li> {' } '} </li>
                                </li>
                                <li> {' } '} </li>
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @RequestMapping - 컨트롤러 1차 경로(타입레벨) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 컨트롤러에서 설정하는 1차 경로(타입레벨)를 담당하고 나머지 메서드 레벨로 흘려보낸다. </li>
                        <li> 부모와 자식으로 상속을 하면 중복되어 쓰는것도 된다. (쓸일이 있을까 싶다..) </li>
                        <li></li>
                        <li></li>

                        <h2 className='h2'> 📌 사용 </h2>
                        <li> @RequestMapping(value="/경로") </li>
                        <li> @RequestMapping(value="/경로.*") </li>
                        <li> @RequestMapping(value="/경로/**") </li>
                        <li> @RequestMapping(value="/경로/**/경로") </li>
                        <li> @RequestMapping(value={'{"/경로","/경로1"}'}) </li>
                        <li> @RequestMapping(value="/경로/{'{파라미터로사용할이름}'}") </li>
                        <li> @RequestMapping(value="/경로", method=RequestMethod.GET) </li>
                        <li> @RequestMapping(value="/경로", method=RequestMethod.POST) </li>
                        <li> @RequestMapping(value="/경로", params="키=값") </li>
                        <li> @RequestMapping(value="/경로", params="키!=값") </li>
                        <li> @RequestMapping(value="/경로", params="키") </li>
                        <li> @RequestMapping(value="/경로", params="!키") </li>
                        <li> @RequestMapping(value="/경로", headers="content-type=text/*") </li>
                        <li> @RequestMapping(value="/경로") </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @RequestBody(미완성) </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> @RestController에서는 이미 포함됨 </li>
                        <li></li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li></li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li></li>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li></li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> @RequestParam </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> @RestController에서는 사용이 안되는 느낌? </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className='block3'>
                                <h3 className='h3'> 🎈 </h3>
                                <div className='block4'>
                                    <li> {'@PostMapping("/post1") '} </li>
                                    <li> {'public String LoginForm3(@RequestParam String data) { '}
                                        <li> {'System.out.println("테스트 성공"); '} </li>
                                        <li> {'return "login"; '} </li>
                                    </li>
                                    <li> {'} '} </li>
                                </div>
                            </div>
                        </li>

                    </div>
                </details>
            </div>


            <div className='block1'>
                <details>
                    <summary> 잠시 보류 </summary>
                    <div className='block2'>

                        <h2 className='h2'> 📌 설명 </h2>
                        <li> 1 </li>
                        <li> 2 </li>
                        <li> 3 </li>

                        <h2 className='h2'> 📌 장점, 단점 </h2>
                        <li> 장점 : </li>
                        <li> 단점 : </li>

                        <h2 className='h2'> ✔ 예시 </h2>
                        <li>
                            <div className="block3">
                                <li> <h3 className="h3"> 🎈 controller 예시 </h3>
                                    <li> @Controller </li>
                                    <li> @RequestMapping("/board") <small> # 이 컨트롤러의 prefix 경로라고 생각하면된다. </small> </li>
                                    <li> public class BoardController {'{'}
                                        <li> </li> <br />
                                        <li> @Autowired </li>
                                        <li> private BoardReposiotry boardRepository </li>
                                        <li></li> <br />

                                        <li> <h4> 🔍 일반적인 GetMapping </h4> </li>
                                        <li> @GetMapping("/index") </li>
                                        <li> public String getIndex() {'{'}
                                            <li> return "index"; </li>
                                        </li>
                                        <li> {'}'} </li> <br />


                                        <li> <h4> 🔍 PostMapping + validator </h4> </li>
                                        <li>@PostMapping("/doCreateUpdateBoard")</li>
                                        <li> {' public String doCreateBoard( BoardEntity boardEntity, BindingResult bindingResult) { '}
                                            <li> boardValidator.validate(boardEntity, bindingResult); <small> bindingResult 객체가 error를 가질 수 있음 </small> </li> <br />

                                            <li> {' if(bindingResult.hasErrors()) { '}
                                                <li> return "boardForm";</li>
                                            </li>
                                            <li> {' } '} </li> <br />

                                            <li>boardRepository.save(boardEntity);</li>
                                            <li>return "redirect:/boardMainpage";</li>
                                        </li>
                                        <li> {' } '} </li>
                                        <li></li> <br />

                                        <li> <h4> 🔍 GetMapping + DB에서 데이터를 조회해서 board객체에 넣어주기</h4> </li>
                                        <li> @GetMapping("/boardView") </li>
                                        <li> public String getBoardView(Model model, @RequestParam(required = false) Long no) {'{'}
                                            <li> Board board = boardRepository.findById(no).orElse(null); <small> # JPA 이용 </small> </li>
                                            <li> model.addAttribute("board", board); </li>
                                            <li> return "boardView"; </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> <h4> 🔍 페이지 처리하기 </h4> </li>
                                        <li> @GetMapping("/boardMainpage") </li>
                                        <li> public String getBoardMainpage(Model model, @PageableDefault(size = 2) Pageable pageable, @RequestParam(required = false, defaultValue = "") String searchText) {'{'}
                                            <li> {' Page<Board> board = boardRepository.findByBoardTitleContainingOrBoardContentContaining(searchText, searchText, pageable); '} </li>
                                            <li> int startPage = Math.max(1,board.getPageable().getPageNumber()-1); </li>
                                            <li> int endPage = Math.min(board.getTotalPages(),startPage+4); </li>
                                            <li> int currentPage = board.getPageable().getPageNumber(); </li> <br />
                                            <li> {' if(currentPage == endPage-2) { '}
                                                <li> {'startPage = Math.max(1,startPage-1); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' else if(currentPage == endPage-1) { '}
                                                <li> {'startPage = Math.max(1,startPage-2); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' if(board.getTotalPages() == 0) { '}
                                                <li> {'endPage = 1; '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> model.addAttribute("startPage",startPage); </li>
                                            <li> model.addAttribute("endPage",endPage); </li>
                                            <li> model.addAttribute("currentPage",currentPage); </li>
                                            <li> model.addAttribute("board",board); </li>
                                            <li> return "boardMainpage"; </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                    </li>
                                    <li> {'}'} </li>

                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> Controller </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> MVC 패턴에서 Sevice와 View를 분리해서 이어주는 역할을 한다. </li>
                        <li> 사용자가 요청하는 경로를 처리하는 역할을 한다. </li>
                        <li> 어떤 service를 연결할지와 예외만 처리 </li>
                        <li> controller에서는 비즈니스 로직을 구현하는 것을 지양한다. </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 :
                            <li> 컨트롤러에 경로 설정들이 되어있으므로 개발할 때 찾기가 쉬움 </li>
                        </li>
                        <li> 단점 : </li>

                        <h2 className="h2"> ✔ 예시 </h2>


                    </div>
                </details>
            </div>

            <div className='block1'>
                <details>
                    <summary> ApiController </summary>
                    <div className='block2'>

                        <h2 className="h2"> 📌 설명 </h2>
                        <li> api를 이용하여 컨트롤러를 사용한 방식 </li>

                        <h2 className="h2"> 📌 REST API란 </h2>
                        <li> 개발자들끼리 정해놓은 규칙이지 표준은 사용자들끼리 정한것이고 공식적인 표준은 없음 </li>
                        <li> 클라이언트와 서버, 애플리케이션과 애플리케이션이 서로 주고 받으려고 정의한 인터페이스 </li>
                        <li> 서버의 리소스에 접근을 가능하게 해준다.</li>
                        <li> 접근 권한이 있는 사람만 서버와 데이터베이스에 접근 가능</li>
                        <li> 모든 요청와 응답은 표준화되어 주고 받는다. </li>
                        <li> REST API란 HTTP URI로 리소스를 표현하고, 리소스에 대한 행위를 HTTP Method로 정의하는 방식</li>
                        <li> JSON, AJAX, XML 형식으로 보내는 방법</li>
                        <li> POST(생성), GET(조회), PUT(수정), DELETE(삭제) 로 표현 (표현 방법이 4가지라 한계점이 존재)</li>
                        <li> 서버-클라이언트 구조, Stateless , 캐시 사용, 계층방식, 인터페이스 일관성</li>
                        <li> REST API 설계 방법
                            <div className="block4">
                                <ol>
                                    <li> /로 계층 구분</li>
                                    <li> 마지막에는 / 사용x</li>
                                    <li> - 사용 , _는 사용x</li>
                                    <li> url은 소문자로 작성</li>
                                    <li> 확장자는 uri에 포함하지 않는다.</li>
                                    <li> 동사보다는 명사로 사용</li>
                                    <li> URI에 post,get 과 같은 행위를 포함하지 않는다. </li>
                                </ol>
                            </div>
                        </li>

                        <h2 className="h2"> 📌 장점, 단점 </h2>
                        <li> 장점 :</li>
                        <li> 단점 : </li>

                        <h2 className="h2"> ✔ 예시 ( 전체적으로 수정 필요)</h2>
                        <li> apicontroller 예시
                            <div className='block3'>
                                <li> <h3 className="h3"> 🎈API PUT 예시 </h3>
                                    <li> {' @PutMapping("/board/{id}") '} </li>
                                    <li> {' Board replaceEmployee(@RequestBody Board newBoard, @PathVariable Long id) { '}
                                        <li> {' return boardRepository.findById(id).map(board -> { '}
                                            <li> {'board.setTitle(newBoard.getTitle()); '} </li>
                                            <li> {'board.setContent(newBoard.getContent()); '} </li>
                                            <li> {'return boardRepository.save(board); '} </li>
                                        </li>
                                        <li> {' }) '} </li>
                                        <li> {' .orElseGet(() -> { '}
                                            <li> {'newBoard.setId(id); '} </li>
                                            <li> {'return boardRepository.save(newBoard); '} </li>
                                        </li>
                                        <li> {' }); '} </li>
                                    </li>
                                    <li> {'} '} </li>
                                </li> <br />
                            </div>
                        </li>

                    </div>
                </details>
            </div>

        </div>
    );
}

export default SpringController;