import React, { Component } from 'react';

class EditCategory extends Component {
    render() {
        return (
            <div>
  <div className="row">
    <ol className="breadcrumb">
      <li><a href="/"><svg className="glyph stroked home">
            <use xlinkHref="/stroked-home" />
          </svg></a></li>
      <li className="active">Icons</li>
    </ol>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-lg-12">
      <h1 className="page-header">Quản lý danh mục</h1>
    </div>
  </div>
  {/*/.row*/}
  <div className="row">
    <div className="col-md-12">
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-md-5">
              <div className="form-group">
                <label htmlFor>Danh mục cha:</label>
                <select className="form-control" name="parent">
                  <option>----ROOT----</option>
                  <option>Nam</option>
                  <option>---|Áo khoác nam</option>
                  <option>---|---|Áo khoác nam</option>
                  <option selected>Nữ</option>
                  <option>---|Áo khoác nữ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor>Tên Danh mục</label>
                <input type="text" className="form-control" name="name" placeholder="Tên danh mục mới" defaultValue="Áo khoác nữ" />
                <div className="alert bg-danger" role="alert">
                  <svg className="glyph stroked cancel">
                    <use xlinkHref="/stroked-cancel" />
                  </svg>Tên danh mục đã tồn tại!<a href="/" className="pull-right"><span className="glyphicon glyphicon-remove" /></a>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sửa danh mục</button>
            </div>
            <div className="col-md-7">
              <div className="alert bg-success" role="alert">
                <svg className="glyph stroked checkmark">
                  <use xlinkHref="/stroked-checkmark" />
                </svg> Đã sửa danh mục thành công! <a href="/" className="pull-right"><span className="glyphicon glyphicon-remove" /></a>
              </div>
              <h3 style={{margin: 0}}><strong>Phân cấp Menu</strong></h3>
              <div className="vertical-menu">
                <div className="item-menu active">Danh mục </div>
                <div className="item-menu"><span>Nam</span>
                  <div className="category-fix">
                    <a className="btn-category btn-primary" href="/"><i className="fa fa-edit" /></a>
                    <a className="btn-category btn-danger" href="/"><i className="fa fa-close" /></a>
                  </div>
                </div>
                <div className="item-menu"><span>---|Áo khoác Nam</span>
                  <div className="category-fix">
                    <a className="btn-category btn-primary" href="/"><i className="fa fa-edit" /></a>
                    <a className="btn-category btn-danger" href="/"><i className="fa fa-close" /></a>
                  </div>
                </div>
                <div className="item-menu"><span>---|---|Áo khoác Nam (Dành cho việc mở rộng)</span>
                  <div className="category-fix">
                    <a className="btn-category btn-primary" href="/"><i className="fa fa-edit" /></a>
                    <a className="btn-category btn-danger" href="/"><i className="fa fa-close" /></a>
                  </div>
                </div>
                <div className="item-menu"><span>Nữ</span>
                  <div className="category-fix">
                    <a className="btn-category btn-primary" href="/"><i className="fa fa-edit" /></a>
                    <a className="btn-category btn-danger" href="/"><i className="fa fa-close" /></a>
                  </div>
                </div>
                <div className="item-menu"><span>---|Áo khoác Nữ</span>
                  <div className="category-fix">
                    <a className="btn-category btn-primary" href="/"><i className="fa fa-edit" /></a>
                    <a className="btn-category btn-danger" href="/"><i className="fa fa-close" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*/.col*/}
  </div>
</div>

        );
    }
}

export default EditCategory;