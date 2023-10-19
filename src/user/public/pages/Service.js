import React, { useState } from 'react'
import NewsIcon from '../../../assets/news.png'
import InfoIcon from '../../../assets/info.png'
import Upload from '../../../assets/uploadex.png'
import { APILOKAL } from '../../../config/api'
import { useMutation } from 'react-query'

function Pub() {
    const [news, setNews] = useState(true)
    const [info, setInfo] = useState(false)
    const [previewnews, setPreviewnews] = useState(null); //For image preview
    
  
    const handleNews = () => {
        setNews(true)
        setInfo(false)
    };
    const handleInfo = () => {
        setNews(false)
        setInfo(true)
    }

    const [formnews, setFormnews] = useState({
      title: "",
      body: "",
      newsId: ""
    });

    const [imagenews, setImageNews] = useState({
      image: "",
      NewsId: "",

    });
    console.log(imagenews.image);

    const handleImageNews = (e) => {
      setImageNews({
        ...imagenews,
        [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

      let url = URL.createObjectURL(e.target.files[0]);
      setPreviewnews(url);
    }
    console.log(previewnews);

    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
  
        // Configuration Content-type
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const configimg = {
          headers: {
            "Content-type": "multipart/form-data",
          },
        };

        const getId = await APILOKAL.get("/newsid")
        const id = getId.data.data;
        formnews.newsId = id;
        console.log(id);
  
        const formDataNews = new FormData();
        // Data body
        const body = JSON.stringify(formnews);
        formDataNews.set("image", imagenews.image[0], imagenews.image[0].name);
        formDataNews.set("NewsId", id);
        console.log(formDataNews);
  
        // Insert data user to database
        const response = await API.post("/addnews", body, config);
        const responseImage = await API.post("/addimagenews", formDataNews, configimg);
        console.log(response);
        console.log(responseImage);
  
        if (response.data.status === "success") {
          
          
          setFormnews({
            title: "",
            body: "",
            newsId: ""
          });
          setImageNews({
            image: "",
            NewsId: ""
          })
          setPreviewnews(null)
        } else {
          
        }
        // Handling response here
      } catch (error) {
        console.log(error);
      }
    });

     const handleChangeNews = (e) => {
    setFormnews({
      ...formnews,
      [e.target.name]: e.target.value,
    });
  }


  //info
  const [preview, setPreview] = useState(false);
  const [form, setForm] = useState({
    image: "",
    title: "",
    body: "",
  });
    
  const handleChangeInfo = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    console.log(form);
    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  console.log(preview);
  const handleSubmitInfo = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      // Store data with FormData as object
      const formData = new FormData();
      formData.set("image", form.image[0], form.image[0].name);
      formData.set("title", form.title);
      formData.set("body", form.body);

      // Configuration

      // Insert product data
      const response = await API.post("/addinfo", formData, config);
      setForm({
        image: "",
    title: "",
    body: "",
    })
      
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className='deflayout'>
        <div className="bidlayout">
        <div className="personnelbar">
          <div className={`${news ? "personnelMenuOn" : "personnelMenu"}`} onClick={handleNews}>
            <img className="iconmenus" src={NewsIcon} />
            <div>News</div>
          </div>
          <div className={`${info ? "personnelMenuOn" : "personnelMenu"}`} onClick={handleInfo}>
            <img className="iconmenus" src={InfoIcon} />
            <div>Info</div>
          </div>
        </div>
      </div>
      <div className="bidpersonnel">
          <div className="HeadText">{`${news ? 'Add News' : 'Add Info'}`}</div>
          <div className={`${news ? 'newss' : 'off'}`}>
            <div className='successadd'>Success</div>
            <form onSubmit={(e) => handleSubmit.mutate(e)} className="forms">
              <div className="inputcol">
                <label>Title</label>
                <input name="title" onChange={handleChangeNews} className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Body</label>
                <textarea name="body" onChange={handleChangeNews} className="inputpers" />
              </div>
              <label htmlFor="file" className="uploadtemp mt-3">
            <div className="uploadexc">
            <div>Upload Image</div>
            </div>
            <div>
              <input type="file"
              id="filenews"
              name="image"
              onChange={handleImageNews}
              hidden/>
            </div>
            {previewnews? <img
                  src={previewnews}
                  alt=""
                  style={{ width: "20%", borderRadius: "5px" }}
                /> : <div className='none' />}
            <label htmlFor='filenews' className="selectfile"><img className="iconmenus1" src={Upload}  /></label>
          </label>
          
              {/* {preview && (
                <img
                  src={preview}
                  alt=""
                  style={{ width: "100%", borderRadius: "5px" }}
                />
              )} */}
              <button className="butt">Submit</button>
            </form>
          </div>
          <div className={`${info ? "importe" : "off"}`}>
          <form className="forms" onSubmit={(e) => handleSubmitInfo.mutate(e)}>
              <div className="inputcol">
                <label>Title</label>
                <input className="inputpers" name='title' onChange={handleChangeInfo}/>
              </div>
              <div className="inputcol">
                <label>Body</label>
                <textarea className="inputpers" name='body' onChange={handleChangeInfo} />
              </div>
              <label htmlFor="file" className="uploadtemp mt-3">
            <div className="uploadexc">
            <div>Upload Image</div>
            </div>
            <div>
              <input type="file"
              id="fileinfo"
              name='image' onChange={handleChangeInfo}
              hidden/>
            </div>
            {preview? <img
                  src={preview}
                  alt=""
                  style={{ width: "20%", borderRadius: "5px" }}
                /> : <div className='none' />}
            <label htmlFor='fileinfo' className="selectfile"><img className="iconmenus1" src={Upload} /></label>
          </label>
              <button type="submit" className="butt">Submit</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Pub