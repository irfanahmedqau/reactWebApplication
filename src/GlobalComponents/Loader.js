import { RingLoader } from "react-spinners";

function CustomLoader() {
  return (
    <div className="overlay">
      <RingLoader
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#03316d", "#03316d", "#03316d", "#03316d", "#03316d"]}
      />
    </div>
  );
}

export default CustomLoader;
