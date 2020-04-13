import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">Sửa Thành viên</h1>
    </div>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-xs-12 col-md-12 col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-heading"><i className="fas fa-user" /> Sửa thành viên - admin@gmail.com</div>
        <div className="panel-body">
          <div className="row justify-content-center" style={{marginBottom: '40px'}}>
            <div className="col-md-8 col-lg-8 col-lg-offset-2">
              <div className="form-group">
                <label>Email</label>
                <input type="text" name="email" className="form-control" defaultValue="admin@gmail.com" />
                <div className="alert alert-danger" role="alert">
                  <strong>email đã tồn tại!</strong>
                </div>
              </div>
              <div className="form-group">
                <label>password</label>
                <input type="text" name="password" className="form-control" defaultValue={'123456'} />
              </div>
              <div className="form-group">
                <label>Full name</label>
                <input type="full" name="full" className="form-control" defaultValue="Nguyễn thế phúc" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="address" name="address" className="form-control" defaultValue="Thường tín" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="phone" name="phone" className="form-control" defaultValue={'0356653300'} />
              </div>
              <div className="form-group">
                <label>Level</label>
                <select name="level" className="form-control" value>
                  <option value={1}>admin</option>
                  <option selected value={2}>user</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-lg-8 col-lg-offset-2 text-right">
                <button className="btn btn-success" type="submit">Sửa thành viên</button>
                <button className="btn btn-danger" type="reset">Huỷ bỏ</button>
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

export default EditUser;