import { Color, Type } from "../cardTypes";

interface CardProps {
  cardNumber?: number;
  cardType: Type;
  cardColor?: Color;
}

export default function Card({ cardType, cardColor, cardNumber }: CardProps) {

  const cardClass = `card card-color-${cardColor} card-type-${cardType}`
  const midCardClass = `midNumber mid-color-${cardColor}`

  return (
    <div className={cardClass}>
      <span className="topNumber">{cardType === 'number' ? cardNumber : ''}</span>
      <div className="MidCard">
      </div>

      <span className={midCardClass}>{cardType === 'number' ? cardNumber : ''}</span>
      <span className="bottomNumber">{cardType === 'number' ? cardNumber : ''}</span>
    </div>
  )
}
