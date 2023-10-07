import React, { useState } from 'react'
import NewsIcon from '../../../assets/news.png'
import InfoIcon from '../../../assets/info.png'
import Upload from '../../../assets/uploadex.png'

function Pub() {
    const [news, setNews] = useState(true)
    const [info, setInfo] = useState(false)
    const handleNews = () => {
        setNews(true)
        setInfo(false)
    };
    const handleInfo = () => {
        setNews(false)
        setInfo(true)
    }
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
            <form className="forms">
              <div className="inputcol">
                <label>Title</label>
                <input className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Body</label>
                <textarea className="inputpers" />
              </div>
              <label htmlFor="file" className="uploadtemp mt-3">
            <div className="uploadexc">
            <div>Upload Image</div>
            </div>
            <div>
              <input type="file"
              id="file"
              hidden/>
            </div>
            <label className="selectfile"><img className="iconmenus1" src={Upload} /></label>
          </label>
              <button className="butt">Submit</button>
            </form>
          </div>
          <div className={`${info ? "importe" : "off"}`}>
          <form className="forms">
              <div className="inputcol">
                <label>Title</label>
                <input className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Body</label>
                <textarea className="inputpers" />
              </div>
              <label htmlFor="file" className="uploadtemp mt-3">
            <div className="uploadexc">
            <div>Upload Image</div>
            </div>
            <div>
              <input type="file"
              id="file"
              hidden/>
            </div>
            <label className="selectfile"><img className="iconmenus1" src={Upload} /></label>
          </label>
              <button className="butt">Submit</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Pub