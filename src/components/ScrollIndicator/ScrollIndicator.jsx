import { useEffect, useState } from "react";
import Titulo from "../Titulo";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleScroll = () => {
    const d = document;
    const howMuchScrolled = d.body.scrollTop || d.documentElement.scrollTop;

    const height =
      d.documentElement.scrollHeight - d.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  if(errorMessage){
    return <div>Error! {errorMessage}</div>
  }

  if(loading){
    return <div>Loading data! Please wait</div>
  }


  return (
    <article>
      <div className="top-container">
        <Titulo titulo="Scroll Indicator" />
        <div className="scroll-progress-tracking-container">
            <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
            ></div>
        </div>
        <div className="data-scroll-container">
            {data && data.length > 0
            ? data.map((product) => <p key={product.id}>{product.title}</p>)
            : null}
        </div>
      </div>
    </article>
  );
};

export default ScrollIndicator;
