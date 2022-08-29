export default function Dot  ({ color }) {
    const style = {
      height: 15,
      width: 15,
      margin: "0px 10px",
      backgroundColor: color,
      borderRadius: "50%",
      display: "inline-block"
    }
    return <span style={style}></span>
  }