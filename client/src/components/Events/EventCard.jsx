import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>IPhone 15 Promax </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          temporibus iste dicta adipisci quos quas sed repellendus eligendi est
          tempora. Vel reiciendis quaerat repudiandae ipsam esse porro amet
          ratione adipisci, est reprehenderit?
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              3453 $
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              34.99 $
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            90.00 sold
          </span>
        </div>
        <CountDown />
        <br />
        {/* <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div
            className={`${styles.button} text-[#fff] ml-5`}
            onClick={() => addToCartHandler(data)}
          >
            Add to cart
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
