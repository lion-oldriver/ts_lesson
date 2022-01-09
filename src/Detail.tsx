import { FeeClassification } from "./FeeClassification"

type DetailProps = {
  classification: FeeClassification
  onNumOfPeopleChange: (num: number) => void
}


const Detail: React.FC<DetailProps> = (props) => {
  const onNumOfPeopleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const num: number = Number(e.target.value)
    props.onNumOfPeopleChange(num)
  }
  
  return(
    <div>
      <div className="classification-name">{props.classification.name}</div>
      <div className='description'>{props.classification.description}</div>
      <div className="unit-price">{props.classification.unitPrice}</div>
      <div className='num-people'>
        <select value={props.classification.numOfPeople} onChange={e => onNumOfPeopleChange(e)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <span>名</span>
      </div>
    </div>
  )
}

export default Detail
