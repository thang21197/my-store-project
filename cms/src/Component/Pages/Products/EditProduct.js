import React, { Component } from 'react';

class EditProduct extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">Sửa sản phẩm</h1>
    </div>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-xs-6 col-md-12 col-lg-12">
      <div className="panel panel-primary">
        <div className="panel-heading">Sửa sản phẩm</div>
        <div className="panel-body">
          <div className="row" style={{marginBottom: '40px'}}>
            <div className="col-md-8">
              <div className="form-group">
                <label>Danh mục</label>
                <select name="category" className="form-control">
                  <option value={1} selected>Nam</option>
                  <option value={3}>---|Áo khoác nam</option>
                  <option value={2}>Nữ</option>
                  <option value={4}>---|Áo khoác nữ</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mã sản phẩm</label>
                <input type="text" name="code" className="form-control" defaultValue="SP01" />
              </div>
              <div className="form-group">
                <label>Tên sản phẩm</label>
                <input type="text" name="name" className="form-control" defaultValue="Sản phẩm 1" />
              </div>
              <div className="form-group">
                <label>Giá sản phẩm (Giá chung)</label>
                <input type="number" name="price" className="form-control" defaultValue={150000} />
              </div>
              <div className="form-group">
                <label>Sản phẩm có nổi bật</label>
                <select name="featured" className="form-control">
                  <option value={0}>Không</option>
                  <option selected value={1}>Có</option>
                </select>
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <select name="state" className="form-control">
                  <option value={1}>Còn hàng</option>
                  <option selected value={0}>Hết hàng</option>
                </select>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Ảnh sản phẩm</label>
                <input id="img" type="file" name="img" className="form-control hidden" onchange="changeImg(this)" />
                <img id="avatar" className="thumbnail" width="100%" height="350px" src="img/import-img.png" alt="avatar"/>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label>Thông tin</label>
                <textarea name="info" style={{width: '100%', height: '100px'}} defaultValue={""} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Miêu tả</label>
                <textarea id="editor" name="describe" style={{width: '100%', height: '100px'}} defaultValue={""} />
              </div>
              <button className="btn btn-success" name="add-product" type="submit">Sửa sản phẩm</button>
              <button className="btn btn-danger" type="reset">Huỷ bỏ</button>
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

export default EditProduct;