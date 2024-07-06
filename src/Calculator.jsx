import React, { useState } from "react";
import illustration from "./assets/images/illustration.svg";
import calculatorIcon from "./assets/images/icon-calculator.svg";
function MortgageCalcul() {
    const [amount, setAmount] = useState("");
    const [term, setTerm] = useState("");
    const [rate, setRate] = useState("");
    const [monthlyRepayment, setMonthlyRepayment] = useState("");
    const [overTerm, setOverTerm] = useState("");
    const [paymentOption, setPaymentOption] = useState("");
    const [isElementOneVisible, setIsElementOneVisible] = useState(true);
    const [validationForm, setValidationForm] = useState({ amount: false, term: false, rate: false, paymentOption: false });

    function calculMortgage() {
        const newValidationForm = {
            amount: !amount,
            term: !term,
            rate: !rate,
            paymentOption: !paymentOption,
        };

        setValidationForm(newValidationForm);

        if (Object.values(newValidationForm).every(field => !field)) {
            setIsElementOneVisible(false);

            const principal = parseFloat(amount);
            const annualRate = parseFloat(rate);
            const loanTermYears = parseInt(term);
            const monthlyRate = annualRate / 12 / 100;
            const totalPayments = loanTermYears * 12;

            if (paymentOption === "repayment") {
                const monthlyRepayment = (principal * monthlyRate * (1 + monthlyRate) ** totalPayments) / ((1 + monthlyRate) ** totalPayments - 1);
                const totalRepayment = monthlyRepayment * totalPayments;
                setMonthlyRepayment(monthlyRepayment.toFixed(2));
                setOverTerm(totalRepayment.toFixed(2));
            } else if (paymentOption === "interestOnly") {
                const monthlyRepayment = principal * monthlyRate;
                const totalRepayment = (monthlyRepayment * totalPayments) + principal;
                setMonthlyRepayment(monthlyRepayment.toFixed(2));
                setOverTerm(totalRepayment.toFixed(2));
            }
        }
    }

    const clearAll = () => {
        setAmount("");
        setTerm("");
        setRate("");
        setPaymentOption("");
        setValidationForm({ amount: false, term: false, rate: false, paymentOption: false });
        setIsElementOneVisible(true);
    };

    return (
        <>
            <div className="container w-[700px] h-[450px] bg-white rounded-[20px] grid grid-cols-2 md:grid-cols-1 md:w-[400px] md:h-screen md:rounded-[0] ">
                <div className="whiteBox grid grid-rows-5 bg-white rounded-[20px_0_0_20px] md:rounded-none md:px-2">
                    <div className="flex justify-around items-center gap-10 md:flex-col md:items-start md:px-6 md:gap-0">
                        <h1 className="text-slate900 font-sans font-bold">Mortgage Calculator</h1>
                        <button onClick={clearAll} className="bg-inherit font-sans font-normal text-[12px] underline cursor-pointer md:mt-[-50px]">Clear All</button>
                    </div>
                    <div className="flex flex-col gap-y-1 pl-6 md:gap-0">
                        <label htmlFor="amount" className="text-slate700 font-sans font-normal text-[10px]">Mortgage Amount</label>
                        <div className="flex">
                            <label htmlFor="amount" className={`h-8 w-8 text-center bg-slate300 text-slate900 font-sans font-bold pt-1 rounded-[2px_0px_0px_2px] cursor-pointer ${validationForm.amount ? 'bg-red text-white' : ''}`}>£</label>
                            <input
                                type="number"
                                name="amount"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className={`w-full px-3 mr-6 border font-bold font-sans text-slate900 border-slate300 rounded-[0px_2px_2px_0px]  focus:outline-lime focus:border-lime ${validationForm.amount ? 'focus:outline-red focus:border-red border-red' : ''}`}
                            />
                        </div>
                        {validationForm.amount && <span className="text-red text-[10px] font-sans font-normal ">The field is required</span>}

                    </div>
                    <div className="grid grid-cols-2 mt-[-20px] md:grid-cols-1 md:mt-[-30px]">
                        <div className="flex flex-col gap-y-1 pr-2 md:pr-6 ">
                            <label htmlFor="term" className="text-slate700 font-sans font-normal text-[10px] pl-6">Mortgage Term</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="term"
                                    id="term"
                                    value={term}
                                    onChange={(e) => setTerm(e.target.value)}
                                    className={`w-full ml-6 border px-2 md:px-0 font-sans font-bold text-slate900 border-slate300 rounded-[2px_0px_0px_2px] focus:outline-lime focus:border-lime ${validationForm.term ? 'focus:outline-red focus:border-red border-red' : ''}`}
                                />
                                <span className={`h-8 w-20 text-center px-1 bg-slate300 text-slate700 font-sans font-normal pt-2 rounded-[0px_2px_2px_0px] text-[12px] md:px-0 ${validationForm.term ? 'bg-red text-white' : ''}`}>Years</span>
                            </div>
                            {validationForm.term && <span className="text-red text-[10px] px-6 font-sans font-normal">The field is required</span>}

                        </div>
                        <div className="flex flex-col gap-y-1 pr-6">
                            <label htmlFor="rate" className="text-slate700 font-sans font-normal text-[10px] pl-6">Interest Rate</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="rate"
                                    id="rate"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value)}
                                    className={`w-full ml-6 border font-sans font-bold text-slate900 px-2 border-slate300 focus:outline-lime focus:border-lime    rounded-[2px_0px_2px_2px] ${validationForm.rate ? 'focus:outline-red focus:border-red border-red' : ''}`}
                                />
                                <span className={`h-8  w-12 text-center px-1   font-sans font-normal pt-2 rounded-[0px_2px_2px_0px] text-[12px] ${validationForm.rate ? 'bg-red text-white ' : 'bg-slate300 text-slate700'} `}>%</span>
                            </div>
                            {validationForm.rate && <span className="text-red text-[10px] px-6 font-sans font-normal">The field is required</span>}

                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-4 mt-[-50px] pl-6 md:mt-[0] md:gap-3">
                        <label className="text-slate700 font-sans font-normal text-[10px] pt-4">Mortgage Type</label>
                        <label htmlFor="repayment" className={`flex items-center gap-x-1 pl-2 border ${paymentOption === "repayment" ? "border-lime bg-[#feffcb]" : "border-slate900"} rounded-lg mr-6 mt-[-5px] hover:border-lime`}>
                            <input
                                type="radio"
                                id="repayment"
                                name="paymentOption"
                                value="repayment"
                                checked={paymentOption === "repayment"}
                                onChange={(e) => setPaymentOption(e.target.value)}
                                className="mr-2 border border-slate300 accent-lime focus:ring-lime focus:ring-offset-2 "
                            />
                            <label htmlFor="repayment" className="text-slate900 font-sans font-bold">Repayment</label>
                        </label>
                        <label htmlFor="interestOnly" className={`flex items-center gap-x-1 border ${paymentOption === "interestOnly" ? "border-lime bg-[#feffcb]" : "border-slate900"} pl-2 mr-6 rounded-lg mt-[-5px] hover:border-lime`}>
                            <input
                                type="radio"
                                id="interestOnly"
                                name="paymentOption"
                                value="interestOnly"
                                checked={paymentOption === "interestOnly"}
                                onChange={(e) => setPaymentOption(e.target.value)}
                                className="mr-2 border border-slate300 accent-lime focus:ring-lime focus:ring-offset-2"
                            />
                            <label htmlFor="interestOnly" className="text-slate900 font-sans font-bold">Interest Only</label>
                        </label>
                        {validationForm.paymentOption && <span className=" text-red text-[10px] font-sans font-normal">The field is required</span>}
                    </div>
                    <div className="ml-6 mt-6 md:m-auto ">
                        <button onClick={calculMortgage} className="flex items-center gap-x-1 py-2 px-6 text-[15px] bg-lime rounded-3xl font-bold font-sans text-slate900 hover:bg-[#e7e981] ">
                            <img src={calculatorIcon} alt="" /> Calculate Repayment
                        </button>
                    </div>
                </div>
                {isElementOneVisible ? (
                    <div className="blackBox bg-slate900 rounded-[0px_20px_20px_20%] md:rounded-none flex flex-col justify-center items-center ">

                        <div className=" grid justify-center items-center gap-2 p-6" >
                            <span className="m-auto"> <img src={illustration} alt="" />
                            </span>
                            <h2 className="text-white font-sans font-normal text-center text-[15px]">Result Shown here </h2>
                            <p className="text-slate300 font-sans font-normal text-center text-[12px]  ">Complete the form and click "calculate the repayments" to see what your monthly repayment would be </p>
                        </div>
                    </div>

                ) : (
                    <div className="blackBox bg-slate900 pt-1 rounded-[0px_20px_20px_20%] md:rounded-none flex flex-col justify-start  ">

                        <div className=" grid  gap-3 p-6" >
                            <h2 className="text-white font-sans font-normal text-start text-[17px]">Your results </h2>
                            <p className="text-slate300 font-sans font-normal text-start text-[13px] pb-2  ">Your results are shown below based on the information you provided. To adjust the results. edit the form and click " calculate reapyments again" </p>
                            <div className="results bg-slate-900 h-[230px] md:h-[220px] w-full border-t-4 border-t-lime rounded-md">
                                <h3 className=" px-4 pt-6 text-[12px] md:text-[14px] font-sans font-normal text-slate-400">Your monthly repayment</h3>
                                <h1 className=" px-4 pt-2 text-[45px] md:text-[35px] font-bold font-sans text-lime">{monthlyRepayment} </h1>
                                <hr className=" mx-4 my-4  bg-sla border-2 border-slate-500 rounded md:my-2" />
                                <h4 className="px-4 text-[12px] md:text-[14px] font-sans font-normal text-slate-400">Total you'll repay over the term </h4>
                                <h4 className="px-4 py-1 text-[16px] md:text-[20px] font-sans font-bold text-white">{overTerm}</h4>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}

export default MortgageCalcul;
