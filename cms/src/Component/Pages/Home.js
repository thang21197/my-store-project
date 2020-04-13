import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
            <div className="row">
              <ol className="breadcrumb">
                <li><a href="/"><svg className="glyph stroked home">
                      <use xlinkHref="/stroked-home" />
                    </svg></a></li>
                <li className="active">Tổng quan</li>
              </ol>
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="col-lg-12">
                <h1 className="page-header">Tổng quan</h1>
              </div>
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-9">
                <div className="panel panel-blue panel-widget ">
                  <div className="row no-padding">
                    <div className="col-sm-3 col-lg-4 widget-left">
                      <span className="glyphicon glyphicon-signal icon-50" aria-hidden="true" />
                    </div>
                    <div className="col-sm-9 col-lg-8 widget-right">
                      <div className="large">8.000.000 đ</div>
                      <div className="text-muted">Doanh thu tháng 7</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 col-lg-3">
                <div className="panel panel-teal panel-widget">
                  <div className="row no-padding">
                    <div className="col-sm-3 col-lg-5 widget-left">
                      <svg className="glyph stroked male-user">
                        <use xlinkHref="/stroked-male-user" />
                      </svg>
                    </div>
                    <div className="col-sm-9 col-lg-7 widget-right">
                      <div className="large">24</div>
                      <div className="text-muted">Số đơn hàng</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/.row*/}
            <div className="row">
              <div className="col-lg-12">
                <div className="panel panel-default">
                  <div className="panel-heading">Biểu đồ doanh thu</div>
                  <div className="panel-body">
                    <div className="canvas-wrapper">
                       <canvas className="main-chart" id="line-chart" height={200} width={600} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        );
    }
}

export default Home;