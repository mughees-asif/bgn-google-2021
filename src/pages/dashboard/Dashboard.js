import React from "react";
import { Row, Col, Progress, Table, Label, Input } from "reactstrap";

import Widget from "../../components/Widget";

import Calendar from "./components/calendar/Calendar";
import Map from "./components/am4chartMap/am4chartMap";
import Rickshaw from "./components/rickshaw/Rickshaw";

import AnimateNumber from "react-animated-number";

import s from "./Dashboard.module.scss";

import peopleA1 from "../../assets/people/a1.jpg";
import peopleA2 from "../../assets/people/a2.jpg";
import peopleA3 from "../../assets/people/a3.jpg";
import peopleA5 from "../../assets/people/a5.jpg";
import peopleA4 from "../../assets/people/a4.jpg";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      checkedArr: [false, false, false],
    };
    this.checkTable = this.checkTable.bind(this);
  }

  checkTable(id) {
    let arr = [];
    if (id === 0) {
      const val = !this.state.checkedArr[0];
      for (let i = 0; i < this.state.checkedArr.length; i += 1) {
        arr[i] = val;
      }
    } else {
      arr = this.state.checkedArr;
      arr[id] = !arr[id];
    }
    if (arr[0]) {
      let count = 1;
      for (let i = 1; i < arr.length; i += 1) {
        if (arr[i]) {
          count += 1;
        }
      }
      if (count !== arr.length) {
        arr[0] = !arr[0];
      }
    }
    this.setState({
      checkedArr: arr,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Dashboard &nbsp;
          <small>
            <small>Sentiment Analysis</small>
          </small>
        </h1>

        {/* <Row> */}
          {/* <Col lg={7}>
            <Widget className="bg-transparent">
              <Map />
            </Widget>
          </Col> */}
          {/* <Col lg={1} /> */}

          {/* <Col lg={4}>
            <Widget
              className="bg-transparent"
              title={
                <h5>
                  {" "}
                  <span className="fw-semi-bold">&nbsp;Statistics</span>
                </h5>
              }
              settings
              refresh
              close
            >
              <p>
                Status: <strong>Live</strong>
              </p>
              <p>
                <span className="circle bg-default text-white">
                  <i className="fa fa-map-marker" />
                </span>{" "}
                &nbsp; 146 Countries, 2759 Cities
              </p>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Foreign Visits</h6>
                  <p className="description deemphasize mb-xs text-white">
                    Some Cool Text
                  </p>
                  <Progress
                    color="primary"
                    value="60"
                    className="bg-subtle-blue progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={75} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Local Visits</h6>
                  <p className="description deemphasize mb-xs text-white">
                    P. to C. Conversion
                  </p>
                  <Progress
                    color="danger"
                    value="39"
                    className="bg-subtle-blue progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={84} />%
                    </small>
                  </span>
                </div>
              </div>
              <div className="row progress-stats">
                <div className="col-md-9 col-12">
                  <h6 className="name fw-semi-bold">Sound Frequencies</h6>
                  <p className="description deemphasize mb-xs text-white">
                    Average Bitrate
                  </p>
                  <Progress
                    color="success"
                    value="80"
                    className="bg-subtle-blue progress-xs"
                  />
                </div>
                <div className="col-md-3 col-12 text-center">
                  <span className="status rounded rounded-lg bg-default text-light">
                    <small>
                      <AnimateNumber value={92} />%
                    </small>
                  </span>
                </div>
              </div>
              <h6 className="fw-semi-bold mt">Map Distributions</h6>
              <p>
                Tracking: <strong>Active</strong>
              </p>
              <p>
                <span className="circle bg-default text-white">
                  <i className="fa fa-cog" />
                </span>
                &nbsp; 391 elements installed, 84 sets
              </p>
              <div className="input-group mt">
                <input
                  type="text"
                  className="form-control bg-custom-dark border-0"
                  placeholder="Search Map"
                />
                <span className="input-group-btn">
                  <button
                    type="submit"
                    className={`btn btn-subtle-blue ${s.searchBtn}`}
                  >
                    <i className="fa fa-search text-light" />
                  </button>
                </span>
              </div>
            </Widget>
          </Col>
        </Row> */}

        <Row>
        <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> Negative </h6>} close settings>
              <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall</h6>
                  <p className="value">31%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Most common words used</h6>
                  <p className="value">horrible, worst, disappointed</p>
                </div>
                {/* <div className="stat-item">
                  <h6 className="name">Daily</h6>
                  <p className="value">2%</p>
                </div> */}
              </div>
              <Progress
                color="danger"
                value="31"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-down" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;14% lower</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> Neutral </h6>} close settings>
            <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall</h6>
                  <p className="value">5%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Most common words used</h6>
                  <p className="value">ok, surprise, design, packaging, texture, colour</p>
                </div>
                {/* <div className="stat-item">
                  <h6 className="name">Daily</h6>
                  <p className="value">2%</p>
                </div> */}
              </div>
              <Progress
                color="bg-primary"
                value="55"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-plus" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;8% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
          <Col lg={6} xl={4} xs={12}>
            <Widget title={<h6> Positive </h6>} close settings>
              <div className="stats-row">
                <div className="stat-item">
                  <h6 className="name">Overall</h6>
                  <p className="value">76%</p>
                </div>
                <div className="stat-item">
                  <h6 className="name">Most common words used</h6>
                  <p className="value">thanks, good, great, amazing</p>
                </div>
                {/* <div className="stat-item">
                  <h6 className="name">Daily</h6>
                  <p className="value">13%</p>
                </div> */}
              </div>
              <Progress
                color="success"
                value="76"
                className="bg-subtle-blue progress-xs"
              />
              <p>
                <small>
                  <span className="circle bg-default text-white mr-2">
                    <i className="fa fa-chevron-up" />
                  </span>
                </small>
                <span className="fw-semi-bold">&nbsp;17% higher</span>
                &nbsp;than last month
              </p>
            </Widget>
          </Col>
        </Row>

        <Row>
          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  <span className="badge badge-success mr-2">New</span> Feedback
                </h6>
              }
              refresh
              close
            >
              <div className="widget-body undo_padding">
                <div className="list-group list-group-lg">
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA3}
                        alt="..."
                      />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Customer # 1</h6>
                      <p className="help-block text-ellipsis m-0">
                      My order came without the product. I only received the packaging.
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA4}
                        alt="..."
                      />
                      <i className="status status-bottom bg-success" />
                    </span>
                    <div>
                      <h6 className="m-0">Customer # 2</h6>
                      <p className="help-block text-ellipsis m-0">
                      This was a new experience for my friends and I.
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA1}
                        alt="..."
                      />
                      <i className="status status-bottom bg-primary" />
                    </span>
                    <div>
                      <h6 className="m-0">Customer # 3</h6>
                      <p className="help-block text-ellipsis m-0">
                      Horrible experience with the product. The quality was not as advertised and the packaging was damaged. Would like a refund!
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA5}
                        alt="..."
                      />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Customer # 4</h6>
                      <p className="help-block text-ellipsis m-0">
                      The is the worst experience I have ever had, if someone offers you this product RUN
                      </p>
                    </div>
                  </button>
                  <button className="list-group-item text-left">
                    <span className="thumb-sm float-left mr">
                      <img
                        className="rounded-circle"
                        src={peopleA2}
                        alt="..."
                      />
                      <i className="status status-bottom bg-danger" />
                    </span>
                    <div>
                      <h6 className="m-0">Customer # 5</h6>
                      <p className="help-block text-ellipsis m-0">
                      I was trying to suprise my friend but you delivered at the wrong time. Thanks alot!
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <footer className="bg-widget-transparent mt">
                <input
                  type="search"
                  className="form-control form-control-sm bg-custom-dark border-0"
                  placeholder="Search"
                />
              </footer>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={
                <h6>
                  {" "}
                  <span className="fw-semi-bold">Gateway Connection</span>
                </h6>
              }
              close
            >
              <div className="widget-body">
                <h3>Connection Status: Stable</h3>
              </div>
              <div className={`widget-table-overflow ${s.table}`}>
                <Table striped size="sm">
                  <thead className="no-bd">
                    <tr>
                      <th>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox210"
                            type="checkbox"
                            onClick={() => this.checkTable(0)}
                            checked={this.state.checkedArr[0]}
                            readOnly
                          />{" "}
                          <Label for="checkbox210" />
                        </div>
                      </th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox212"
                            type="checkbox"
                            onClick={() => this.checkTable(1)}
                            checked={this.state.checkedArr[1]}
                            readOnly
                          />{" "}
                          <Label for="checkbox212" />
                        </div>
                      </td>
                      <td>Negative</td>
                      <td className="text-align-right fw-semi-bold">bad, worst</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214"
                            onClick={() => this.checkTable(2)}
                            type="checkbox"
                            checked={this.state.checkedArr[2]}
                            readOnly
                          />{" "}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>Neutral</td>
                      <td className="text-align-right fw-semi-bold">ok, taste, smell</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox abc-checkbox">
                          <Input
                            className="mt-0"
                            id="checkbox214"
                            onClick={() => this.checkTable(3)}
                            type="checkbox"
                            checked={this.state.checkedArr[3]}
                            readOnly
                          />{" "}
                          <Label for="checkbox214" />
                        </div>
                      </td>
                      <td>Positive</td>
                      <td className="text-align-right fw-semi-bold">great, like, amazing</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div
                className="widget-body mt-xlg chart-overflow-bottom"
                style={{ height: "100px" }}
              >
                <Rickshaw height={90} />
              </div>
            </Widget>
          </Col>

          <Col lg={4} xs={12}>
            <Widget
              title={<h6>Calendar</h6>}
              settings
              close
              bodyClass={"pt-2 px-0 py-0"}
            >
              <Calendar />
              <div className="list-group fs-mini">
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-primary float-right">
                    6:45
                  </span>
                  New product testing at Selfridges
                </button>
                <button className="list-group-item text-ellipsis">
                  <span className="badge badge-pill badge-success float-right">
                    9:41
                  </span>
                  Free sample giveaway at Bond Street
                </button>
              </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
