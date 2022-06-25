import classes from "./card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus } from "@fortawesome/fontawesome-free-solid"

const Card = (props) => {
  return (
    <div className={`${props.className} ${classes.flex_item_two}`}>
      <div className={classes.first_card}>
        <p>PERFUME</p>
        <h2>
          Gabrielle <br /> Essence Eau De <br /> Parfum
        </h2>
      </div>
      <div className={classes.second_card}>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={classes.prices}>
          <h2>$149.99</h2>
          <p>$169.99</p>
        </div>
      </div>
      <button className={classes.button}>
        <span>
          <FontAwesomeIcon icon={faCartPlus} />
        </span>
        Add to Cart
      </button>
    </div>
  )
}

export default Card
