// css
import './styles.scss' 

const Button = (props) => {
  let size_w = 400;
  if (props.bold) {
    size_w += 300;
  }

  return (
    <button className="submit-button" type="submit">
      {props.text}
    </button>
  );
};

export default Button;
