
import './App.css';
import React from 'react';
import { useState } from 'react';
import data from './data';

// import './fontawesome-free-6.4.0-web/css/all.min.css';


function App() {
  const [list, setList] = useState(data);

  const [job, setEmployee] = useState({stt:'',congViec:'',batDau:'',ketThuc:'', trangThai:''});

  const handleInput = (e) => {

    setEmployee({ ...job, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault()
    setList([...list, job]);
    setEmployee({stt:'',congViec:'',batDau:'',ketThuc:'', trangThai:''});
  };

  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1">
          <h3>TLU</h3>
        </div>
        <div className="col-md-1">
          <span>Trang chủ</span>
        </div>
        <div className="col-md-7">
          <b>Quản lý công việc</b>
        </div>
        <div className="col-md-3">
          <div style={{ marginLeft: 65 }}>
            <form action="search.php">
              <input
                type="text"
                name="content"
                id="txtcontent"
                placeholder="Nhập nội dung"
              />
              <input type="submit" defaultValue="Tìm kiếm" />
            </form>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: 25, backgroundColor: "grey" }} />
      <div
        className="inner-box row"
        style={{ backgroundColor: "black", color: "white" }}
      >
        <div className="inner-text col-md-4">
          <h2>
            Quản lý <b>Công việc</b>
          </h2>
        </div>
        <div className="col-md-4"></div>
        {/* <div class="col-md-4">
                <div>
                    <button style="background-color: rgb(58, 36, 36); color:white"><input type="checkbox"> Tất cả</button>
                    <button style="background-color: rgb(141, 60, 60); color:white"> <input type="checkbox"> Khẩn cấp</button>
                    <button style="background-color: gray; color:white"><input type="checkbox"> Đang thực hiện</button>
                    <button > <input type="checkbox"> Trì hoãn</button>
                </div>
            </div> */}


        <div className="col-md-4">
          <div>
            <button>
              {" "}
              <i className="fa-solid fa-phone" />
              Tất cả
            </button>
            <button>
              {" "}
              <i className="fa-solid fa-phone" />
              Khẩn cấp
            </button>
            <button>
              {" "}
              <i className="fa-solid fa-phone" />
              Đang thực hiện
            </button>
            <button>
              {" "}
              <i className="fa-solid fa-phone" />
              Trì hoãn
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Table */}
    <div className="table container-fulid">
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Công việc</th>
            <th>Thời gian bắt đầu</th>
            <th>Thời gian kết thúc</th>
            <th>Trạng thái</th>
            <th>Quản lý</th>
          </tr>
        </thead>
        <tbody>


  {/* {
        "stt":"4",
        "congViec":"Hoàn thiện báo cáo tổng kết gửi lãnh đạo",
        "batDau":"03/04/2024",
        "ketThuc":"21/04/2004",
        "trangThai":"Đang thực hiện" */}


          {list.map((job, index)=>{
            return(
            <tr>
              <td>{job.stt}</td>
              <td>{job.congViec}</td>
              <td>{job.batDau}</td>
              <td>{job.ketThuc}</td>
              <td>{job.trangThai}</td>
              <td>
                <i className="fa-solid fa-plus-circle" style={{marginRight:'10px', marginLeft:'5px'}} />
                <i className="fa-solid fa-remove" />
              </td>
            </tr>
            )
          })}
        
        </tbody>
      </table>
    </div>
    {/* Footer */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <span>Hiển thị <b>5</b> / <b>25</b> bản ghi</span>
        </div>
        <div className="col-md-6" />
        <div className="col-md-3">
          <ul className="pagination">
            <li>
              <a href="#" className="page-link">
                Trước
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                1
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                2
              </a>
            </li>
            <li active="">
              <a href="#" className="page-link">
                3
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                4
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                5
              </a>
            </li>
            <li>
              <a href="#" className="page-link">
                Sau
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
    className="header-form"
    style={{ backgroundColor: "black", color: "white" }}
    >
    <h4>
      <span>Thêm công việc</span>
    </h4>
  
  </div>
  {/* {
        "stt":"4",
        "congViec":"Hoàn thiện báo cáo tổng kết gửi lãnh đạo",
        "batDau":"03/04/2024",
        "ketThuc":"21/04/2004",
        "trangThai":"Đang thực hiện" */}

  <form
    action="test.php"
    name="form1"
    onsubmit="return check(event)"
    style={{ backgroundColor: "white" }}
  >
    Số thứ tự
    <br />
    <input onChange={handleInput} type="text" name="stt" style={{ width: 280 }} />
    <br />
    Tên công việc
    <br />
    <input onChange={handleInput} type="text" name="congViec" style={{ width: 280 }} />
    <br />
    Thời gian bắt đầu
    <br />
    <input onChange={handleInput} type="text" name="batDau" style={{ width: 280 }} />
    <br />
    Thời gian kết thúc
    <br />
    <input onChange={handleInput} type="text" name="ketThuc" style={{ width: 280 }} />
    <br/>
    Trạng thái
    <br/>
    <input onChange={handleInput} type="text" name="trangThai" style={{ width: 280 }} />
    <br />
    <div className="footer" style={{ backgroundColor: "grey" }}>
      <button>Hủy</button>
      <input type="submit" onClick={handleAdd} defaultValue="Thêm" />
    </div>
  </form>
  </>

  );
}

export default App;
