import style from "../../style/LandingPage/PlanCards.module.css";
import { useAppDispatch } from "../../redux/hooks";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  // createPaymentGenin,
  // createPaymentChuunin,
  // createPaymentJounin,
  createPayment,
} from "../../redux/actions/index";
// import { useEffect, useRef } from "react";
// import { useHistory } from "react-router-dom";

export default function PlanCards(): JSX.Element {
  // const scrollCard = useRef();
  // let userDB = useAppSelector((state) => state["user"]);
  let dispatch = useAppDispatch();
  // let history = useHistory();


  const handleSubmit = async (plan: string) => {
    try {
      await dispatch(createPayment(plan)).then((val: any) => {
        window.location.href = `${val.data.data}`;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div id="planCards" className={style["title"]}>
      <h1>Our premium offerts:</h1>
      <div className={style["back"]}>
        <div className={style["cardPlan"]}>
          <h2>GENIN-PLAN</h2>

          <button className={style["btn"]} onClick={()=> handleSubmit('1')}>
            VIP
          </button>

          <h3 className={style["pack-price"]}>1.50 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
          </ul>
        </div>
        <div className={style["cardPlan"]}>
          <h2>CHUUNIN-PLAN(1-Month)</h2>

          <button className={style["btn"]} onClick={()=> handleSubmit('2')}>
            VIP
          </button>

          <h3 className={style["pack-price"]}>3.00 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
            <li>Offline Viewing</li>
          </ul>
        </div>
        <div className={style["cardPlan"]}>
          <h2>JOUNIN-PLAN(1-Year)</h2>

          <button className={style["btn"]} onClick={()=> handleSubmit('3')}>
            VIP
          </button>

          <h3 className={style["pack-price"]}>36.00 USD</h3>
          <ul>
            <li>No ads</li>
            <li>Unlimited access to the ZeroTwo library</li>
            <li>New episodes one hour after Japan</li>
            <li>Stream on 1 device at a time</li>
            <li>Offline Viewing</li>
            <li>16% discount on Monthly Plan (billed every 12-months)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
