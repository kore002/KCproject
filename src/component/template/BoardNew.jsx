import '../../assets/boardstyle.css'


function BoardNew() {
 
    return(
        <div>
            <h2>글 작성</h2>
            <div>
                <form>
                    <div>
                        <input type='text' className='inputTitle' placeholder='제목을 입력하세요' />
                    </div>
                    <div>
                        <textarea className='inputContent' placeholder='내용을 입력하세요' />
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
 
export default BoardNew;