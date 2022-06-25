import classes from "./App.module.css"
import image from "./images/image-product-desktop.jpg"
import Card from "./components/card/card"

function App() {
  return (
    <div className={classes.center_screen}>
      <div className={classes.inner_container}>
        <div className={classes.flex_item}>
          <img src={image} alt="perfume" />
        </div>
        <Card className={classes.flex_item} />
      </div>
    </div>
  )
}

export default App
