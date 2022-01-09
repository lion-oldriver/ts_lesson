type SummaryProps = {
  numOfPeople: number
  totalAmount: number
}

const Summary: React.FC<SummaryProps> = (props) => {
  return (
    <div>
      <div className="party">
        <input type="text" className="party" value={props.numOfPeople} />
        <span>名様</span>
      </div>
      <div className='total-amount'>
        <span>合計</span>
        <input type="text" className='total-amount' value={props.totalAmount} />
        <span>円</span>
      </div>
    </div>
  )
}

export default Summary
