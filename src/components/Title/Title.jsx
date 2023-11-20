import './Title.scss'

const Title = ({ leyend }) => {
  return (
    <div className="glitch-wrapper">
      <div className="glitch" data-glitch={leyend}>{leyend}</div>
    </div>
  )
}

export default Title