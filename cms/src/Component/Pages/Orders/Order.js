import React, { Component } from 'react';

class Order extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <ol className="breadcrumb">
      <li><a href="/"><svg className="glyph stroked home">
            <use xlinkHref="/stroked-home" />
          </svg></a></li>
      <li className="active">Đơn hàng</li>
    </ol>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-xs-12 col-md-12 col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-heading">Danh sách đơn đặt hàng chưa xử lý</div>
        <div className="panel-body">
          <div className="bootstrap-table">
            <div className="table-responsive">
              <a href="processed.html" className="btn btn-success">Đơn đã xử lý</a>
              <table className="table table-bordered" style={{marginTop: '20px'}}>
                <thead>
                  <tr className="bg-primary">
                    <th>ID</th>
                    <th>Tên khách hàng</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>Xử lý</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nguyễn Thế Phúc</td>
                    <td>0356653300</td>
                    <td>Thường tín</td>
                    <td>
                      <a href="detailorder.html" className="btn btn-warning"><i className="fa fa-pencil" aria-hidden="true" />Xử lý</a>
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default Order;