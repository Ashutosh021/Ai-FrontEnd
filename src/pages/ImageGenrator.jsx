import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/image.css';
import { useState } from "react";
import axios from "axios";

const ImageGenerator = ({ userPoints, setUserPoints }) => {
  const [searchText, setSearchText] = useState("");
  const [imageSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const authToken = localStorage.getItem("authToken");
      const res = await axios.post(`https://aibackend-1d3h.onrender.com/api/v1/images`, {
        searchText: searchText,
      }, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
      });
      const data = res.data;
      if (data?.status === 'success') {
        setImgSrc(data.data.imageUrl); 
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <div className="input-group mb-3">
            <input 
              onChange={handleChange} 
              value={searchText} 
              type="text" 
              className="form-control"
              placeholder="What do you want to see..." 
            />
            <div className="input-group-append">
              <button onClick={handleClick} className="btn btn-success">
                Generate Image
              </button>
            </div>
          </div>
          <div className="box mt-4 d-flex justify-content-between">
            {isLoading ? (
              <div className="spinner-border text-primary d-flex justify-content-center " role="status">
                <span className="sr-only d-flex justify-content-center">Loading...</span>
              </div>
            ) : (
              <img src={imageSrc} alt="Search a image" className=" rounded"style={{backgroundColor:"#343a40", border:"none"}}/> 
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
