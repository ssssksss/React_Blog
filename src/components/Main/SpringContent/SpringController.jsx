import React from 'react';

const SpringController = (props) => {
    return (
        <>

            <div className="common_style">
                <span className="lblock">
                    {/*  */}

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> Controller
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 어노테이션 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li> @Controller </li>
                                    <li> @RequestMapping("/board") </li>
                                    <li> public class BoardController {'{'}
                                        <li> </li> <br />
                                        <li> @Autowired </li>
                                        <li> private BoardReposiotry boardRepository </li>
                                        <li>  </li> <br />

                                        <li> <small> # 일반적인 GetMapping </small> </li>
                                        <li> @GetMapping("/index") </li>
                                        <li> public String getIndex() {'{'}
                                            <li> return "index"; </li>
                                        </li>
                                        <li> {'}'} </li> <br />


                                        <li> <small> # PostMapping + validator </small> </li>
                                        <li>  @PostMapping("/doCreateUpdateBoard")  </li>
                                        <li> {' public String doCreateBoard( BoardEntity boardEntity, BindingResult bindingResult) { '}
                                            <li> boardValidator.validate(boardEntity, bindingResult); <small> bindingResult 객체가 error를 가질 수 있음 </small> </li> <br />

                                            <li> {' if(bindingResult.hasErrors()) { '}
                                                <li> return "boardForm";  </li>
                                            </li>
                                            <li> {' } '} </li> <br />

                                            <li>  boardRepository.save(boardEntity);  </li>
                                            <li>  return "redirect:/boardMainpage";  </li>
                                        </li>
                                        <li> {' } '} </li>
                                        <li>  </li> <br />

                                        <li> <small> # GetMapping + DB에서 데이터를 조회해서 board객체에 넣어주기 </small> </li>
                                        <li> @GetMapping("/boardView") </li>
                                        <li> public String getBoardView(Model model, @RequestParam(required = false) Long no) {'{'}
                                            <li> Board board = boardRepository.findById(no).orElse(null); <small> # JPA 이용 </small> </li>
                                            <li> model.addAttribute("board", board); </li>
                                            <li> return "boardView"; </li>
                                        </li>
                                        <li> {'}'} </li> <br />

                                        <li> <small> # 페이지 처리하기 </small> </li>
                                        <li> @GetMapping("/boardMainpage") </li>
                                        <li> public String getBoardMainpage(Model model, @PageableDefault(size = 2) Pageable pageable, @RequestParam(required = false, defaultValue = "") String searchText) {'{'}
                                            <li> {' Page<Board> board = boardRepository.findByBoardTitleContainingOrBoardContentContaining(searchText, searchText, pageable); '} </li>
                                            <li> int startPage = Math.max(1,board.getPageable().getPageNumber()-1); </li>
                                            <li> int endPage = Math.min(board.getTotalPages(),startPage+4); </li>
                                            <li> int currentPage = board.getPageable().getPageNumber(); </li> <br />
                                            <li> {' if(currentPage == endPage-2) { '}
                                                <li> {'     startPage = Math.max(1,startPage-1); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' else if(currentPage == endPage-1) { '}
                                                <li> {'     startPage = Math.max(1,startPage-2); '} </li>
                                            </li>
                                            <li> {' } '} </li>
                                            <li> {' if(board.getTotalPages() == 0) { '}
                                                <li> {'     endPage = 1; '} </li>
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


                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'> RestController
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> REST API란 </div>
                                <div className='mblock'>
                                    <li> 클라이언트와 서버, 애플리케이션과 애플리케이션이 서로 주고 받으려고 정의한 인터페이스 </li>
                                    <li> 서버의 리소스에 접근을 가능하게 해준다.  </li>
                                    <li> 접근 권한이 있는 사람만 서버와 데이터베이스에 접근 가능  </li>
                                    <li> 모든 요청와 응답은 표준화되어 주고 받는다.(표준은 사용자들끼리 정한것이고 공식적인 표준은 없음) </li>
                                    <li> REST API란 HTTP URI로 리소스를 표현하고, 리소스에 대한 행위를 HTTP Method로 정의하는 방식  </li>
                                    <li> JSON, AJAX, XML 형식으로 보내는 방법  </li>
                                    <li> POST(생성), GET(조회), PUT(수정), DELETE(삭제) 로 표현 (표현 방법이 4가지라 한계점이 존재)  </li>
                                    <li> REST API 설계 방법
                                        <li> /로 계층 구분  </li>
                                        <li> 마지막에는 / 사용x  </li>
                                        <li> - 사용 , _는 사용x  </li>
                                        <li> url은 소문자로 작성  </li>
                                        <li> 확장자는 uri에 포함하지 않는다.  </li>
                                        <li> 동사보다는 명사로 사용  </li>
                                        <li> URI에 post,get 과 같은 행위를 포함하지 않는다. </li>
                                    </li>
                                    <li> 서버-클라이언트 구조, Stateless , 캐시 사용, 계층방식, 인터페이스 일관성  </li>
                                    <li>   </li>
                                </div>
                                <div className='sstitle'> HTTP 응답 상태 코드 </div>
                                <div className='mblock'>
                                    <li> 200 : 정상적 수행  </li>
                                    <li> 201 : 클라이언트가 리소스 생성 요청, 리소스가 성공적으로 생성(Post) </li>
                                    <li> 301 : 클라이언트가 요청한 리소스에 대한 URI가 변경이 된 경우  </li>
                                    <li> 400 : 클라이언트의 요청이 부적절한 경우   </li>
                                    <li> 401 : 클라이언트가 인증되지 않을 떄 보호된 리소스에 접근했을 때 발생하는 에러  </li>
                                    <li> 403 : 클라이언트가 응답하고 싶지 않은 리소스를 요청할 때 ( 권장x )  </li>
                                    <li> 405 : 클라이언트가 사용불가능한 Method를 이용해서 리소스를 요청할 때  </li>
                                    <li> 500 : 서버에 문제가 있을 경우 발생하는 코드  </li>
                                </div>
                                <div className='sstitle'>  </div>
                                <div className='mblock'>
                                    <li> {'     @PutMapping("/board/{id}") '} </li>
                                    <li> {'     Board replaceEmployee(@RequestBody Board newBoard, @PathVariable Long id) { '} </li>
                                    <li> {'  '} </li>
                                    <li> {'         return boardRepository.findById(id) '} </li>
                                    <li> {'                 .map(board -> { '} </li>
                                    <li> {'                     board.setTitle(newBoard.getTitle()); '} </li>
                                    <li> {'                     board.setContent(newBoard.getContent()); '} </li>
                                    <li> {'                     return boardRepository.save(board); '} </li>
                                    <li> {'                 }) '} </li>
                                    <li> {'                 .orElseGet(() -> { '} </li>
                                    <li> {'                     newBoard.setId(id); '} </li>
                                    <li> {'                     return boardRepository.save(newBoard); '} </li>
                                    <li> {'                 }); '} </li>
                                    <li> {'     } '} </li>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='mblock'>
                        <details>
                            <summary className='stitle'>
                                <a name='' style={{ visibility: 'hidden' }}>  </a> </summary>
                            <div className='sblock'>
                                <div className='sstitle'> 설명 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                                <div className='sstitle'> 예시 </div>
                                <div className='mblock'>
                                    <li>  </li>
                                    <li>  </li>
                                </div>
                            </div>
                        </details>
                    </div>


                </span>
            </div>
        </>
    );
}

export default SpringController;