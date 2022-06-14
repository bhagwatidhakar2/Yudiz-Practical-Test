import * as React from "react";
import { useState } from "react";
import QuestionMarkImage from "../../assets/defaultImage.jpeg";
import JsImage from "../../assets/js.png";
import CPlusPlusImage from "../../assets/c-plus-plus.png";
import PythonImage from "../../assets/python.png";
import BlockchainImage from "../../assets/blockchain.jpg";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const [isVisibleJsImage, setIsVisibleJsImage] = useState(false);
  const [isVisibleCPlusPlusImage, setIsVisibleCPlusPlusImage] = useState(false);
  const [isVisiblePythonImage, setIsVisiblePythonImage] = useState(false);
  const [isVisibleBlockchainImage, setIsVisibleBlockchainImage] =
    useState(false);
  const [point, setPoint] = useState(0);

  const showJsImage = () => {
    setIsVisibleJsImage(true);
    setIsVisibleCPlusPlusImage(false);
    setIsVisiblePythonImage(false);
    setIsVisibleBlockchainImage(false);
    setPoint(1);
    alert("You Won!!");
  };

  const hideJsImage = () => {
    setIsVisibleJsImage(false);
    setPoint(0);
  };
  const showCPlusPlusImage = () => {
    setIsVisibleCPlusPlusImage(true);
    setIsVisibleJsImage(false);
    setIsVisiblePythonImage(false);
    setIsVisibleBlockchainImage(false);
    setPoint(1);
    alert("You Won!!");
  };

  const hideCPlusImage = () => {
    setIsVisibleCPlusPlusImage(false);
    setPoint(0);
  };

  const showPythonImage = () => {
    setIsVisiblePythonImage(true);
    setIsVisibleJsImage(false);
    setIsVisibleCPlusPlusImage(false);
    setIsVisibleBlockchainImage(false);
    setPoint(1);
    alert("You Won!!");
  };

  const hidePythonImage = () => {
    setIsVisiblePythonImage(false);
    setPoint(0);
  };

  const showBlockchainImage = () => {
    setIsVisibleBlockchainImage(true);
    setIsVisibleJsImage(false);
    setIsVisibleCPlusPlusImage(false);
    setIsVisiblePythonImage(false);
    setPoint(1);
    alert("You Won!!");
  };

  const hideBlockchainImage = () => {
    setIsVisibleBlockchainImage(false);
    setPoint(0);
  };

  const clickDefaultImage = (event: any) => {
    setPoint(event);
    alert("You lose!!");
    hideJsImage();
    hideCPlusImage();
    hidePythonImage();
    hideBlockchainImage();
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-purple-500 h-screen">
        <div className="text-center text-2xl text-bold mt-4 mb-10">
          Card Memory Game
        </div>
        <div className="mb-4">Your Point : {point}</div>
        <div className="grid grid-cols-6 space-x-4">
          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2 ml-4"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              {isVisibleJsImage === true ? (
                <img
                  src={JsImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2 ml-4"
                  onClick={hideJsImage}
                ></img>
              ) : (
                <img
                  src={QuestionMarkImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2 ml-4"
                  onClick={showJsImage}
                ></img>
              )}
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2 ml-4"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2 ml-4"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2 ml-4"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              {isVisibleCPlusPlusImage === true ? (
                <img
                  src={CPlusPlusImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={hideCPlusImage}
                ></img>
              ) : (
                <img
                  src={QuestionMarkImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={showCPlusPlusImage}
                ></img>
              )}
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              {isVisibleBlockchainImage === true ? (
                <img
                  src={BlockchainImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={hideBlockchainImage}
                ></img>
              ) : (
                <img
                  src={QuestionMarkImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={showBlockchainImage}
                ></img>
              )}
            </div>
          </div>

          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              {isVisiblePythonImage === true ? (
                <img
                  src={PythonImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={hidePythonImage}
                ></img>
              ) : (
                <img
                  src={QuestionMarkImage}
                  alt=""
                  height={"30"}
                  width={"30"}
                  className="mb-2"
                  onClick={showPythonImage}
                ></img>
              )}
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
          </div>

          <div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
            <div>
              <img
                src={QuestionMarkImage}
                alt=""
                height={"30"}
                width={"30"}
                className="mb-2"
                onClick={() => clickDefaultImage("0")}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
