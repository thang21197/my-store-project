import React, { Component } from 'react';

class Processed extends Component {
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
        <div className="panel-heading">Danh sách đơn đặt hàng đã xử lý</div>
        <div className="panel-body">
          <div className="bootstrap-table">
            <div className="table-responsive">
              <a href="/" className="btn btn-warning"><span className="glyphicon glyphicon-gift" />Đơn Chưa xử lý</a>
              <table className="table table-bordered" style={{marginTop: '20px'}}>				
                <thead>
                  <tr className="bg-primary">
                    <th>ID</th>
                    <th>Tên khách hàng</th>
                    <th>Email</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>Thời gian</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2</td>
                    <td>Nguyễn văn An</td>
                    <td>Lu@gmail.com</td>
                    <td>015232412</td>
                    <td>Bắc ninh</td>
                    <td>2018-12-06 12:17:17</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Nguyễn thế phúc</td>
                    <td>admin@gmail.com</td>
                    <td>0906013526</td>
                    <td>Thường tín , hà nội</td>
                    <td>2018-12-06 02:05:30</td>                                                                                
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

export default Processed;