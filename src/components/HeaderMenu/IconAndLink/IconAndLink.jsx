// css
import './styles.scss';
 
const IconAndLink = (props) => {
  let image;
  let border = { border: "none", borderRadius: "none" };
  let color = { color: "#white", fontWeight: "normal" };

  if (props.img) {
    image = <img src={props.img} alt="vetor" />;
  } else {
    image = null;
  }

  if (props.border) {
    border["border"] = "1px solid orange";
    border["borderRadius"] = "8px";
  }
  if (props.bold) {
    color["color"] = "#faa500";
    color["fontWeight"] = "bold";
  }

  return (
    <div className="iconAndLink" style={border}>
      {image}
      <a style={color} href={props.link}>
        {props.text}
      </a>
    </div>
  );
};

export default IconAndLink;
