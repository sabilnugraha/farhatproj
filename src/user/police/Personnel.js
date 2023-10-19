import React, { useState } from "react";
import Add from "../../assets/add.png";
import Excel from "../../assets/excel.png";
import Template from "../../assets/template.png"
import Upload from "../../assets/uploadex.png"
import { Alert } from "bootstrap";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';



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
    }));
    const [showexc, setShowexc] = useState(false);


    const [dataPerson, setDataPerson] = useState([]);
    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        console.log(data);
        
        // Convert array of arrays into array of objects
        const headers = data[0];
        const rows = data.slice(1);
        const formattedData = rows.map(row => {
          let obj = {};
          row.forEach((field, index) => {
            obj[headers[index]] = field;
          });
          return obj;
        });
        
        setDataPerson(formattedData);
      };
      reader.readAsBinaryString(file);
      setShowexc(true)
    }
    
    const DataTable = () => {
      const [currentPage, setCurrentPage] = useState(0);
      
      const pageSize = 3;
      const pageCount = Math.ceil(dataPerson.length / pageSize);
      
      const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
      };

      console.log(dataPerson);

      return (
        <div className={`${showexc ? "tables" : "off"}`}>
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
            {dataPerson.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((data, index) => (
    <tr key={index + 1}>
        <td>{index + 1}</td>
        <td>{data.FullName}</td>
        <td>{data.email}</td>
        <td>{data.Phone}</td>
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

    //add personnel
    const [message, setMessage] = useState(null);

  const [formAdd, setFormAdd] = useState({
    email: "",
    phone: "",
    fullname: "",
  });

  const { email, phone, fullname } = formAdd;

  const handleChangeAdd = (e) => {
    setFormAdd({
      ...formAdd,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formAdd);
    
  const handleSubmitAdd = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const bodyAdd = JSON.stringify(formAdd);

      // Insert data user to database
      const responseadd = await API.post("/registerpolice", bodyAdd, config);

      console.log(responseadd);

      if (responseadd.data.status === "success") {
        const alert = (
          <div className="success">
            Success Add Personnel
          </div>
        );
        setMessage(alert);
        setFormAdd({
          fullname: "",
          email: "",
          phone: "",
        });
      } else {
        const alert = (
          <div className="denied">
            Failed
          </div>
        );
        setMessage(alert);
      }
      
      
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  const handleDownload = () => {
    const data = [{
      "FullName" : "",
      "email" : "",
      "Phone" : ""
    }];
  
    const wb = XLSX.utils.book_new();

    // Mengubah data JSON menjadi worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Menambahkan worksheet ke workbook
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Menulis workbook ke file Excel
    XLSX.writeFile(wb, "data.xlsx");
  }
    
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
            <form className="forms" onSubmit={(e) => handleSubmitAdd.mutate(e)}>
            {message && message}
              <div className="inputcol">
                <label>Full Name</label>
                <input name="fullname" value={formAdd.fullname} onChange={handleChangeAdd} className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Email</label>
                <input name="email" value={formAdd.email} onChange={handleChangeAdd} className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Phone</label>
                <input name="phone" value={formAdd.phone} onChange={handleChangeAdd} className="inputpers" />
              </div>
              <div className="inputcol">
                <label>Address</label>
                <textarea name="address" onChange={handleChangeAdd} className="inputpers" />
              </div>
              <button type="submit" className="butt">Submit</button>
            </form>
          </div>
          <div className={`${imports ? "importe" : "off"}`}>
          <div className={`${imports ? "downloadtemp" : "off"}`} onClick={handleDownload}>
            <img className="iconmenus" src={Template} />
            <div>Download Templates</div>
          </div>
          <label htmlFor="file" className={`${imports ? "uploadtemp" : "off"}`}>
            <div className="uploadexc" >
            <div>Upload Template</div>
            </div>
            <div>
              <input type="file"
              id="file"
              onChange={handleFileUpload}
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
