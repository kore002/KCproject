//import { useState } from "react";
//import Button from "../assets/Button";
import '../../assets/boardstyle.css'


function BoardList() {
//    const [count, setCount] = useState(0);

    // function OnOff() {
    //   console.log("asdfsdsds");
    //   setCount(count + 1);
    // }
    
    return (
      <>
        <div>
          <h2>게시판</h2>
          <div>
            <table className="listTable">
                <tbody>
                    <tr>
                        <td className="listTableIndex th">index</td>
                        <td className="listTableIndex th">title</td>
                    </tr>
                    <tr>
                        <td className="listTableIndex th"></td>
                        <td className="listTableIndex th">작성된 글이 없습니다.</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  
  export default BoardList;
  