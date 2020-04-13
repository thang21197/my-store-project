import React, { Component } from 'react';

class ListProduct extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <ol className="breadcrumb">
      <li><a href="/"><svg className="glyph stroked home">
            <use xlinkHref="/stroked-home" />
          </svg></a></li>
      <li className="active">Danh sách sản phẩm</li>
    </ol>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">Danh sách sản phẩm</h1>
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
              <a href="addproduct.html" className="btn btn-primary">Thêm sản phẩm</a>
              <table className="table table-bordered" style={{marginTop: '20px'}}>
                <thead>
                  <tr className="bg-primary">
                    <th>ID</th>
                    <th>Thông tin sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Tình trạng</th>
                    <th>Danh mục</th>
                    <th width="18%">Tùy chọn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="row">
                        <div className="col-md-3"><img src="img/ao-khoac.jpg" alt="Áo đẹp" width="100px" className="thumbnail" /></div>
                        <div className="col-md-9">
                          <p><strong>Mã sản phẩm : SP01</strong></p>
                          <p>Tên sản phẩm :Áo Khoác Bomber Nỉ Xanh Lá Cây AK179</p>
                        </div>
                      </div>
                    </td>
                    <td>500.000 VND</td>
                    <td>
                      <a className="btn btn-success" href="/" role="button">Còn hàng</a>
                    </td>
                    <td>Áo Khoác Nam</td>
                    <td>
                      <a href="/" className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true" /> Sửa</a>
                      <a href="/" className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true" /> Xóa</a>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="row">
                        <div className="col-md-3"><img src="img/ao-khoac.jpg" alt="Áo đẹp" width="100px" className="thumbnail" /></div>
                        <div className="col-md-9">
                          <p><strong>Mã sản phẩm : SP01</strong></p>
                          <p>Tên sản phẩm :Áo Khoác Bomber Nỉ Xanh Lá Cây AK179</p>
                        </div>
                      </div>
                    </td>
                    <td>500.000 VND</td>
                    <td>
                      <a className="btn btn-danger" href="/" role="button">hết hàng</a>
                    </td>
                    <td>Áo Khoác Nam</td>
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

export default ListProduct;