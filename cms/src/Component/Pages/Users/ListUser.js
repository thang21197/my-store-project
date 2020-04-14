import React, { Component } from 'react';
import { connect } from "react-redux";

class ListUser extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <ol className="breadcrumb">
      <li><a href="/"><svg className="glyph stroked home">
            <use xlinkHref="/stroked-home" />
          </svg></a></li>
      <li className="active">Danh sách thành viên</li>
    </ol>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">Danh sách thành viên</h1>
    </div>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-xs-12 col-md-12 col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-body">
          <div className="bootstrap-table">
            <div className="table-responsive">
              <div className="alert bg-success" role="alert">
                <svg className="glyph stroked checkmark">
                  <use xlinkHref="/stroked-checkmark" />
                </svg>Đã thêm thành công<a href="/" className="pull-right"><span className="glyphicon glyphicon-remove" /></a>
              </div>
              <a href="adduser.html" className="btn btn-primary">Thêm Thành viên</a>
              <table className="table table-bordered" style={{marginTop: '20px'}}>
                <thead>
                  <tr className="bg-primary">
                    <th>ID</th>
                    <th>Email</th>
                    <th>Full</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Level</th>
                    <th width="18%">Tùy chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Admin@gmail.com</td>
                    <td>Nguyễn thế phúc</td>
                    <td>Thường tín</td>
                    <td>0356653300</td>
                    <td>1</td>
                    <td>
                      <a href="/" className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true" /> Sửa</a>
                      <a href="/" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /> Xóa</a>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Admin@gmail.com</td>
                    <td>Nguyễn thế phúc</td>
                    <td>Thường tín</td>
                    <td>0356653300</td>
                    <td>1</td>
                    <td>
                      <a href="/" className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true" /> Sửa</a>
                      <a href="/" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /> Xóa</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div align="right">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="/">Trở lại</a></li>
                  <li className="page-item"><a className="page-link" href="/">1</a></li>
                  <li className="page-item"><a className="page-link" href="/">2</a></li>
                  <li className="page-item"><a className="page-link" href="/">3</a></li>
                  <li className="page-item"><a className="page-link" href="/">tiếp theo</a></li>
                </ul>
              </div>
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div></div></div>

        );
    }
}
const mapStateToProps = state => {
  return {
    users: state.userReducer.users  
  }
}

export default connect(mapStateToProps)(ListUser)