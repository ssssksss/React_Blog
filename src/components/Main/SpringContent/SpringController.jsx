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