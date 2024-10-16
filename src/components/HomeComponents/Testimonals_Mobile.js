import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { content_testimonal } from "./Testimonial";

const Separtate_testimonal_Component = ({
  text_control = {},
  image_control = {},
  whole_control = {},
  whole_initial = {},
  image_initial = {},
  text_initial = {},
  content = {},
}) => {
  return (
    <motion.div
      initial={whole_initial}
      animate={whole_control}
      className=" absolute xl:w-[30vw] lg:w-[35vw] md:w-[35vw] sm:w-[35vw] w-[80vw] h-[75vh] top-[50%]   flex flex-col "
    >
      <motion.div
        initial={image_initial}
        animate={image_control}
        className=" w-full h-[70%]"
      >
        <img src={content?.image} className=" w-full h-full object-cover" />
      </motion.div>
      <motion.div
        animate={text_control}
        initial={text_initial}
        className=" w-full h-[30%] flex flex-col justify-evenly"
      >
        <h1 className=" xl:text-[32px] lg:text-[30px] md:text-[26px] sm:text-[24px] text-[20px] font-poppins text-[black]">
          {content?.name}
        </h1>
        <p className=" xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[13px] font-poppins text-[black]">
          {content?.testimonial}
        </p>
        <h2 className=" xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-[14px]  font-poppins text-[black]">
          {content?.position}
        </h2>
      </motion.div>
    </motion.div>
  );
};

const Testimonals_Mobile = () => {
  const [currentSelect, setCurrentSelect] = useState(2);
  //-----------------------------------------------------------------------------
  const whole_one_control = useAnimation();
  const image_one_control = useAnimation();
  const text_one_control = useAnimation();
  const [one_left, set_one_left] = useState(-50);
  //-----------------------------------------------------------------------------
  const whole_two_control = useAnimation();
  const image_two_control = useAnimation();
  const text_two_control = useAnimation();
  const [two_left, set_two_left] = useState(50);
  //-----------------------------------------------------------------------------
  const whole_three_control = useAnimation();
  const image_three_control = useAnimation();
  const text_three_control = useAnimation();
  const [three_left, set_three_left] = useState(150);
  //-----------------------------------------------------------------------------
  const whole_four_control = useAnimation();
  const image_four_control = useAnimation();
  const text_four_control = useAnimation();
  const [four_left, set_four_left] = useState(250);
  //-----------------------------------------------------------------------------

  //-----------------------------------------------------------------------------

  const unMountAnimations = (text_control, image_control) => {
    text_control.start({
      y: "19%",
      rotate: [0, 10],
      rotateX: 10,
      scale: 0.5,

      opacity: [100, 10, 0],

      transition: {
        duration: 0.6,
      },
    });

    image_control.start({
      scale: 0.75,
      transition: {
        duration: 0.6,
      },
    });
  };

  const mountingAnimations = (text_control, image_control) => {
    text_control.start({
      opacity: [0, 90, 100],
      rotate: [10, 0],
      rotateX: [10, 0],
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.75,
      },
    });

    image_control.start({
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.75,
      },
    });
  };

  let difference_percentage = 100;

  const left_scroll_button_click = () => {
    if (currentSelect === 4) {
      return;
    }

    let transition_obj = {
      duration: 1.25,
      delay: 0.5,
    };

    // ------ One ----------------------
    let left_one = one_left - difference_percentage;
    whole_one_control.start({
      left: left_one + "%",
      transition: transition_obj,
    });
    set_one_left((state) => {
      return state - difference_percentage;
    });
    //----------------- Two -------------
    let left_two = two_left - difference_percentage;
    whole_two_control.start({
      left: left_two + "%",
      transition: transition_obj,
    });
    set_two_left((state) => {
      return state - difference_percentage;
    });
    // ---------------- Three -------------
    let left_three = three_left - difference_percentage;
    whole_three_control.start({
      left: left_three + "%",
      transition: transition_obj,
    });
    set_three_left((state) => {
      return state - difference_percentage;
    });
    // ------------------ Four ---------------
    let left_four = four_left - difference_percentage;
    whole_four_control.start({
      left: left_four + "%",
      transition: transition_obj,
    });
    set_four_left((state) => {
      return state - difference_percentage;
    });

    //---------------------------------------------------------------

    if (currentSelect === 1) {
      unMountAnimations(text_one_control, image_one_control);
      mountingAnimations(text_two_control, image_two_control);
    } else if (currentSelect === 2) {
      unMountAnimations(text_two_control, image_two_control);
      mountingAnimations(text_three_control, image_three_control);
    } else if (currentSelect === 3) {
      unMountAnimations(text_three_control, image_three_control);
      mountingAnimations(text_four_control, image_four_control);
    }

    //------------------------------------------------------------------
    setCurrentSelect((state) => {
      return state + 1;
    });
  };

  const right_scroll_button_click = () => {
    if (currentSelect === 1) {
      return;
    }

    let transition_obj = {
      duration: 1.25,
      delay: 0.5,
    };

    // ------ One ----------------------
    let left_one = one_left + difference_percentage;
    whole_one_control.start({
      left: left_one + "%",
      transition: transition_obj,
    });
    set_one_left((state) => {
      return state + difference_percentage;
    });
    //----------------- Two -------------
    let left_two = two_left + difference_percentage;
    whole_two_control.start({
      left: left_two + "%",
      transition: transition_obj,
    });
    set_two_left((state) => {
      return state + difference_percentage;
    });
    // ---------------- Three -------------
    let left_three = three_left + difference_percentage;
    whole_three_control.start({
      left: left_three + "%",
      transition: transition_obj,
    });
    set_three_left((state) => {
      return state + difference_percentage;
    });
    // ------------------ Four ---------------
    let left_four = four_left + difference_percentage;
    whole_four_control.start({
      left: left_four + "%",
      transition: transition_obj,
    });
    set_four_left((state) => {
      return state + difference_percentage;
    });

    //---------------------------------------------------------------

    if (currentSelect === 1) {
      // WIll not be true
    } else if (currentSelect === 2) {
      unMountAnimations(text_two_control, image_two_control);
      mountingAnimations(text_one_control, image_one_control);
    } else if (currentSelect === 3) {
      unMountAnimations(text_three_control, image_three_control);
      mountingAnimations(text_two_control, image_two_control);
    } else if (currentSelect === 4) {
      unMountAnimations(text_four_control, image_four_control);
      mountingAnimations(text_three_control, image_three_control);
    }

    //------------------------------------------------------------------
    setCurrentSelect((state) => {
      return state - 1;
    });
  };

  return (
    <>
      <div className=" w-full h-[120vh] overflow-hidden sm:hidden mt-[2rem]  ">
        <h1 className="text-[12vw] text-center font-black  text-gray-500 uppercase tracking-[-0.05em] leading-[0.8] whitespace-nowrap scale-y-[1.2] mt-[5rem]">
          Testimonals
        </h1>

        <div className="w-full h-screen relative overflow-hidden sm:hidden ">
          {/* ---------------- */}

          {/* First */}
          <Separtate_testimonal_Component
            whole_control={whole_one_control}
            text_control={text_one_control}
            image_control={image_one_control}
            whole_initial={{ x: "-50%", y: "-50%", left: one_left + "%" }}
            text_initial={{ opacity: 0 }}
            image_initial={{ scale: 0.75 }}
            content={content_testimonal[0]}
          />

          {/* Second */}
          <Separtate_testimonal_Component
            whole_control={whole_two_control}
            text_control={text_two_control}
            image_control={image_two_control}
            whole_initial={{ x: "-50%", y: "-50%", left: two_left + "%" }}
            text_initial={{}}
            image_initial={{}}
            content={content_testimonal[1]}
          />

          {/* Third */}
          <Separtate_testimonal_Component
            whole_control={whole_three_control}
            text_control={text_three_control}
            image_control={image_three_control}
            whole_initial={{
              x: "-50%",
              y: "-50%",

              left: three_left + "%",
            }}
            text_initial={{ opacity: 0 }}
            image_initial={{ scale: 0.75 }}
            content={content_testimonal[2]}
          />

          {/* Fourth  */}
          <Separtate_testimonal_Component
            whole_control={whole_four_control}
            text_control={text_four_control}
            image_control={image_four_control}
            whole_initial={{
              x: "-50%",
              y: "-50%",
              left: four_left + "%",
            }}
            text_initial={{ opacity: 0 }}
            image_initial={{ scale: 0.75 }}
            content={content_testimonal[3]}
          />

          {/* -------------- Button Section --------- */}
          <div className="w-fit h-fit absolute bottom-[4rem] right-[2rem] flex flex-row justify-center gap-[1.5rem]">
            {/* Button 1 */}
            <button
              onClick={() => {
                left_scroll_button_click();
              }}
              className=" w-[60px] h-[60px] rounded-[50%] bg-[#3d3d3d] flex flex-row justify-center items-center hover:bg-[#ff516f] hover:scale-110 duration-300 "
            >
              <MdKeyboardDoubleArrowLeft size={24} color="white" />
            </button>
            {/* Button 2 */}
            <button
              onClick={() => {
                right_scroll_button_click();
              }}
              className=" w-[60px] h-[60px] rounded-[50%] rotate-180 bg-[#3d3d3d] flex flex-row justify-center items-center hover:bg-[#ff516f] hover:scale-110 duration-300 "
            >
              <MdKeyboardDoubleArrowLeft size={24} color="white" />
            </button>
          </div>
          {/* ---------------- */}
        </div>
      </div>
    </>
  );
};

export default Testimonals_Mobile;
