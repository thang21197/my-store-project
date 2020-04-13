import React, { Component } from 'react';

class DetailOrder extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <ol className="breadcrumb">
      <li><a href="/"><svg className="glyph stroked home">
            <use xlinkHref="/stroked-home" />
          </svg></a></li>
      <li className="active">Đơn hàng / Chi tiết đặt hàng</li>
    </ol>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-xs-12 col-md-12 col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-heading">Chi tiết đặt hàng</div>
        <div className="panel-body">
          <div className="bootstrap-table">
            <div className="table-responsive">
              <div className="form-group">
                <div className="row">
                  <div className="col-md-6">
                    <div className="panel panel-blue">
                      <div className="panel-heading dark-overlay">Thông tin khách hàng</div>
                      <div className="panel-body">
                        <strong><span className="glyphicon glyphicon-user" aria-hidden="true" /> : Nguyễn thế phúc</strong> <br />
                        <strong><span className="glyphicon glyphicon-phone" aria-hidden="true" /> : Số điện thoại: 0356653300</strong>
                        <br />
                        <strong><span className="glyphicon glyphicon-send" aria-hidden="true" /> : Thường tín</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table table-bordered" style={{marginTop: '20px'}}>
                <thead>
                  <tr className="bg-primary">
                    <th>ID</th>
                    <th>Thông tin Sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="row">
                        <div className="col-md-4">
                          <img width="100px" src="img/ao-khoac.jpg" className="thumbnail" alt="Áo khoác"/>
                        </div>
                        <div className="col-md-8">
                          <p><b>Mã sản phẩm</b>: SP01</p>
                          <p><b>Tên Sản phẩm</b>: Áo Khoác Bomber Nỉ Xanh Lá Cây AK179</p>
                          <p><b>Số lương</b> : 2</p>
                        </div>
                      </div>
                    </td>
                    <td>500.000 VNĐ</td>
                    <td>1.000.000 VNĐ</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <div className="row">
                        <div className="col-md-4">
                          <img width="100px" src="img/ao-khoac.jpg" className="thumbnail" alt="Áo"/>
                        </div>
                        <div className="col-md-8">
                          <p><b>Mã sản phẩm</b>: SP02</p>
                          <p><b>Tên Sản phẩm</b>: Áo Khoác Bomber Nỉ Xanh Lá Cây AK179</p>
                          <p><b>Số lương</b> : 1</p>
                        </div>
                      </div>
                    </td>
                    <td>500.000 VNĐ</td>
                    <td>500.000 VNĐ</td>
                  </tr>
                </tbody>
              </table>
              <table className="table">
                <thead>
                  <tr>
                    <th width="70%">
                      <h4 align="right">Tổng Tiền :</h4>
                    </th>
                    <th>
                      <h4 align="right" style={{color: 'brown'}}>1.500.000 VNĐ</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <div className="alert alert-primary" role="alert" align="right">
                <a name id className="btn btn-success" href="/" role="button">Đã xử lý</a>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default DetailOrder;