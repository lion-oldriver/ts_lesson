import React, { useState } from "react"
import { FeeClassification } from "./FeeClassification"
import Detail from "./Detail"
import Summary from "./Summary"


type AdmissionFeeCalculatorState = {
  idx: number
  feeClassifications: FeeClassification
}[]

const AdmissionFeeCalculator = () => {
  const admissionFeeCalculatorState: AdmissionFeeCalculatorState = [
    { 
      idx: 0,
      feeClassifications: {
        name: "大人",
        description: "",
        unitPrice: 1000,
        numOfPeople: 0,
        totalPrice: 0
      }
    },
    {
      idx: 1,
      feeClassifications: {
        name: "学生",
        description: "中学生・高校生",
        unitPrice: 700,
        numOfPeople: 0,
        totalPrice: 0
      }
    },
    { 
      idx: 2,
      feeClassifications: {
        name: "子供",
        description: "小学生",
        unitPrice: 300,
        numOfPeople: 0,
        totalPrice: 0
      }
    },
    {
      idx: 3,
      feeClassifications: {
        name: "幼児",
        description: "未就学",
        unitPrice: 0,
        numOfPeople: 0,
        totalPrice: 0
      }
    },
  ]
  const [menu, setMenu] = useState(admissionFeeCalculatorState)

  const handleNumOfPeopleChange = (idx: number, num: number) =>{
    const currentFC = menu[idx]
    const newTotalPrice = currentFC.feeClassifications.unitPrice * num
    const newFC: FeeClassification = Object.assign({}, currentFC.feeClassifications, { numOfPeople: num, totalPrice: newTotalPrice })
    const feeClassifications = menu.slice()
    feeClassifications[idx].feeClassifications = newFC

    setMenu(feeClassifications)
  }

  const details = menu.map((fc, idx: number) => {
    return (
      <Detail key={idx.toString()} classification={fc.feeClassifications} onNumOfPeopleChange={n => handleNumOfPeopleChange(idx, n)} />
    )
  })
  const numOfPeople = menu.map(fc => fc.feeClassifications.numOfPeople).reduce((p, c) => p + c)
  const totalAmount = menu.map(fc => fc.feeClassifications.totalPrice).reduce((p, c) => p + c)

  return (
    <>
      {details}
      <Summary numOfPeople={numOfPeople} totalAmount={totalAmount} />
    </>
  )
}

export default AdmissionFeeCalculator
