import { useEffect, useState } from "react";
//import Button from "../assets/Button";
import PromoList from "../../json/2023/TEST/P_List.json"
import P_001 from "../../json/2023/TEST/P_001.json"
import RedCost from "../../images/2023/Promo/red_cost.png"
import GreenCost from "../../images/2023/Promo/green_cost.png"
import YellowCost from "../../images/2023/Promo/yellow_cost.png"
import MixCost from "../../images/2023/Promo/mix_cost.png"
function MainPage() {
  const [promolist, setPromolist]= useState([]);

  useEffect(() => {
      setPromolist(PromoList)

    console.log(promolist)
    console.log(PromoList)
  }, []);
  function asdf(){
          console.log(P_001)
    
  }
  function costImg( costObject ){
    console.log(costObject)
    const cost_icon = costObject;
    var cost_arr = []
    if(cost_icon.red > 0){for(var r = 0; r<cost_icon.red; r++){cost_arr.push('red')}}
    if(cost_icon.green > 0){for(var g = 0; g<cost_icon.green; g++){cost_arr.push('green')}}
    if(cost_icon.yellow > 0){for(var y = 0; y<cost_icon.yellow; y++){cost_arr.push('yellow')}}
    if(cost_icon.blue > 0){for(var b = 0; b<cost_icon.blue; b++){cost_arr.push('blue')}}
    if(cost_icon.purple > 0){for(var p = 0; p<cost_icon.purple; p++){cost_arr.push('purple')}}
    if(cost_icon.mix > 0){for(var m = 0; m<cost_icon.mix; m++){cost_arr.push('mix')}}
    
    return(
      <>
        {
          cost_arr.map((item, index) => (
            item == "red" ? <img src={RedCost} alt="" key={index} className="cost_icon"></img> :
            item == "green" ? <img src={GreenCost} alt="" key={index} className="cost_icon"></img> :
            item == "yellow" ? <img src={YellowCost} alt="" key={index} className="cost_icon"></img> :
            item == "blue" ? <img src="" alt="" key={index} className="cost_icon"></img> :
            item == "purple" ? <img src="" alt="" key={index} className="cost_icon"></img> :
            item == "mix" ? <img src={MixCost} alt="" key={index} className="cost_icon"></img> : <></>
          ))
        }
      </>
    )
  }
  return (
    <>
      <div>
        {
          promolist.map((item, index) => (
            <div key={index}>
              <div>name : {item.info.name}</div>
              
              <div>skill : 
                  <span> ≪
                    {costImg(item.skill.cost)} ≫
                    </span>
                  <span>{item.skill.condition} </span> 
                   - {item.skill.text}
              </div>
              
              {/* <div>attack : 
                <span style={{color:'red'}}>{item.attack[0].cost.red} - </span> 
                {item.attack[0].text}
              </div> */}
            
            </div>
            
          ))
        }
        <button onClick={asdf}> dngy</button>
      </div>
    
    </>
  );
}

export default MainPage;
