import React, { useState } from "react";
import Add from "../../assets/add.png";
import Excel from "../../assets/excel.png";
import Template from "../../assets/template.png"
import Upload from "../../assets/uploadex.png"

function Personnel() {
    const[add, setAdd] = useState(true)
    const[imports, setImports] = useState(false)
    const handleAdd = () => {
        setAdd(true)
        setImports(false)
    };
    const handleImport = () => {
        setAdd(false)
        setImports(true)
    }
    const dummyData = Array.from({ length: 10 }, (_, i) => ({
      no: i + 1,
      fullName: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `08123456789${i}`,
    }))
    const DataTable = () => {
      const [currentPage, setCurrentPage] = useState(0);
      
      const pageSize = 3;
      const pageCount = Math.ceil(dummyData.length / pageSize);
      
      const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
      };

      return (
        <div className="tables">
          <table className="myTable">
            <thead>
              <tr >
                <th >No</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((data) => (
                <tr key={data.no}>
                  <td>{data.no}</td>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="preparation">
          <div className="pagebutt">
    {currentPage > 0 && (
      <button className="nextprev" onClick={() => setCurrentPage(currentPage - 1)}>
        Previous
      </button>
    )}
    {currentPage < pageCount - 1 && (
      <button className="nextprev" onClick={() => setCurrentPage(currentPage + 1)}>
        Next
      </button>
    )}
  </div>
      <div className="pagebutt">
  <button className="nextprev"> Submit</button>
  </div>
  </div>

        </div>
      );
    };
    
    
  return (
    <div className="deflayout">
      <div className="bidlayout">
        <div className="personnelbar">
          <div className={`${add ? "personnelMenuOn" : "personnelMenu"}`} onClick={handleAdd}>
            <img className="iconmenus" src={Add} />
            <div>Add Personnel</div>
          </div>
          <div className={`${imports ? "personnelMenuOn" : "personnelMenu"}`} onClick={handleImport}>
            <img className="iconmenus" src={Excel} />
            <div>Import Personnel</div>
          </div>
        </div>
      </div>
      <div className="servpersonnel">
        <div className="bidpersonnel">
          <div className="HeadText">{`${add ? 'Add Personnel' : 'Import Personnel'}`}</div>
          <div className={`${add ? 'adds' : 'off'}`}>
            <form className="forms">
              <div className="inputcol">
                <label>Full Name</label>
                <input className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Email</label>
                <input className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Phone</label>
                <input className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Address</label>
                <textarea className="inputpers" />
              </div>
              <button className="butt">Submit</button>
            </form>
          </div>
          <div className={`${imports ? "importe" : "off"}`}>
          <div className={`${imports ? "downloadtemp" : "off"}`} onClick={handleAdd}>
            <img className="iconmenus" src={Template} />
            <div>Download Template</div>
          </div>
          <label htmlFor="file" className={`${imports ? "uploadtemp" : "off"}`}>
            <div className="uploadexc">
            <div>Upload Template</div>
            </div>
            <div>
              <input type="file"
              id="file"
              hidden/>
            </div>
            <label className="selectfile"><img className="iconmenus1" src={Upload} /></label>
          </label>
          
          {DataTable()}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Personnel;
