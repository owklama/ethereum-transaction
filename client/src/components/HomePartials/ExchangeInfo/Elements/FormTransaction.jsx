import React, { useState } from "react";

import InputElement from "../../../Reusable/InputElement";
import ButtonElement from "../../../Reusable/ButtonElement";

const initState = {
  addressTo: "",
  amount: "",
  keyword: "",
  message: "",
};

const FormTransaction = () => {
  const [stateTransaction, setStateTransaction] = useState(initState);

  const updateState = (name, event) => {
    setStateTransaction((prevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  };

  const onSend = () => {
    console.log(stateTransaction);
    setStateTransaction(initState);
  };

  const [isError, setIsError] = useState(false);

  const { addressTo, amount, keyword, message } = stateTransaction;

  return (
    <div className=" --silver-border --gradient-blue-silver shadow-lg rounded-2xl h-[420px] w-[516px] mx-auto">
      <div className="flex flex-col h-[80%] justify-around items-center translate-y-20 w-full">
        <InputElement
          value={addressTo}
          placeholder={"Address To"}
          onChange={updateState.bind(this, "addressTo")}
          name={"addressTo"}
          isError={isError}
        />
        <InputElement
          value={amount}
          placeholder={"Amount"}
          onChange={updateState.bind(this, "amount")}
          name={"amount"}
          isError={isError}
        />
        <InputElement
          value={keyword}
          placeholder={"Keyword"}
          onChange={updateState.bind(this, "keyword")}
          name={"keyword"}
          isError={isError}
        />
        <InputElement
          value={message}
          placeholder={"Message"}
          onChange={updateState.bind(this, "message")}
          name={"message"}
          isError={isError}
        />
        <div className="--silver-border --gradient-silver outline-none border-none shadow-lg rounded-lg mb-3">
          <ButtonElement
            title={"Send Now"}
            backgroundColor={"green"}
            textColor={"white"}
            onClick={onSend}
          />
        </div>
      </div>
    </div>
  );
};

export default FormTransaction;