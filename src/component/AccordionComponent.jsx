import React, { useState } from 'react'
import {usetate} from 'react'
import MediaQuery from 'react-responsive'
import mobileBg from '../img/background-pattern-mobile.svg'
import desktopBg from '../img/background-pattern-desktop.svg'
import star from '../img/icon-star.svg'
import plus from '../img/icon-plus.svg'
import minus from '../img/icon-minus.svg'

const AccordionComponent = () => {
    const [prevOpenElement, setprevOpenElement] = useState();
    const [prevOpenImg, setPrevOpenImg] = useState();
    const [prevImgState, setPrevImageState] = useState();

    function toggleAccordion(event){
        let clickedElementParent = event.target;
        let imgElement = null;
        if(event.target.nodeName == "IMG"){
            clickedElementParent = clickedElementParent.parentElement.parentElement;
            imgElement = event.target;
            imgElement.src = minus;
            setPrevImageState(minus);
        }else if(event.target.nodeName == "H2"){
            clickedElementParent = clickedElementParent.parentElement
            imgElement = event.target.nextElementSibling.children[0];
            imgElement.src = minus;
            setPrevImageState(minus);
        }
        const answerTextBlock = clickedElementParent.nextSibling;
        if(prevOpenElement != null && prevOpenElement != answerTextBlock){
            prevOpenElement.classList.add("hidden");
            prevOpenImg.src = plus;
        }else if(prevOpenImg == imgElement){
            if(prevImgState == minus){
                prevOpenImg.src = plus;
                setPrevImageState(plus);
            }else{
                prevOpenImg.src = minus;
                setPrevImageState(minus);
            }
        }
        answerTextBlock.classList.toggle("hidden");
        setprevOpenElement(answerTextBlock);
        setPrevOpenImg(imgElement);
    }

  return (
    <div className="flex flex-col items-center h-screen bg-lightPink">
        <div className="w-full mb-14 md:mb-0">
            <MediaQuery query="(max-width: 375px)">
                <img src={mobileBg} alt="Background" />
            </MediaQuery>
            <MediaQuery query="(min-width: 380px)">
                <img className="w-full" src={desktopBg} alt="Background" />
            </MediaQuery>
            
        </div>
        <div className="p-6 m-6 rounded-xl -mt-24 bg-white max-w-screen-md">
            <div className="flex items-center">
                <img className="w-7 mr-6" src={star}/>
                <h1 className="text-2xl font-WorkSans font-bold text-4xl text-darkPurple">FAQs</h1>
            </div>
            <div className="mt-6">
                {/* Accordion Item #1 */}
                <div className="cursor-pointer">
                    <div className="flex flex-col">
                        <div className="flex" onClick={toggleAccordion}>
                            <h2 className="font-WorkSans font-semibold text-darkPurple w-3/4 select-none">What is Frontend Mentor, and how will it help me?</h2>
                            <div className="w-1/4 flex items-center justify-end">
                                <img  src={plus} alt='Plus Button' />
                            </div>
                        </div>
                        
                        <div className="mt-6 hidden cursor-default">
                            <p className="text-grayishPurple">
                                Frontend Mentor offers realistic coding challenges to help developers improve their 
                                frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
                                all levels and ideal for portfolio building.
                            </p>
                        </div>
                    </div>
                    {/* Place Answer here */}
                    <hr className="my-6" />
                </div>
                {/* Accordion Item #2 */}
                <div className="cursor-pointer">
                    <div className="flex flex-col">
                        <div className="flex" onClick={toggleAccordion}>
                            <h2 className="font-WorkSans font-semibold text-darkPurple w-3/4 select-none">Is Frontend Mentor free?</h2>
                            <div className="w-1/4 flex items-center justify-end">
                                <img  src={plus} alt='Plus Button' />
                            </div>
                        </div>
                        
                        <div className="mt-6 hidden cursor-default">
                            <p className="text-grayishPurple">
                                Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                                option providing access to a range of projects suitable for all skill levels.
                            </p>
                        </div>
                    </div>
                    {/* Place Answer here */}
                    <hr className="my-6" />
                </div>
                {/* Accordion Item #3 */}
                <div className="cursor-pointer">
                    <div className="flex flex-col">
                        <div className="flex" onClick={toggleAccordion}>
                        <   h2 className="font-WorkSans font-semibold text-darkPurple w-3/4 select-none">Can I use Frontend Mentor projects in my portfolio?</h2>
                            <div className="w-1/4 flex items-center justify-end">
                                <img  src={plus} alt='Plus Button' />
                            </div>
                        </div>

                        <div className="mt-6 hidden cursor-default">
                            <p className="text-grayishPurple">
                                Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                                way to showcase your skills to potential employers!
                            </p>
                        </div>
                    </div>
                    {/* Place Answer here */}
                    <hr className="my-6" />
                </div>
                {/* Accordion Item #4 */}
                <div className="cursor-pointer">
                    <div className="flex flex-col">
                        <div className="flex" onClick={toggleAccordion}>
                            <h2 className="font-WorkSans font-semibold text-darkPurple w-3/4 select-none">How can I get help if I'm stuck on a Frontend Mentor challenge?</h2>
                            <div className="w-1/4 flex items-center justify-end">
                                <img  src={plus} alt='Plus Button' />
                            </div>
                        </div>

                        <div className="mt-6 hidden cursor-default">
                            <p className="text-grayishPurple">
                                The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                                channel where you can ask questions and seek support from other community members.
                            </p>
                        </div>
                    </div>
                    {/* Place Answer here */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccordionComponent
