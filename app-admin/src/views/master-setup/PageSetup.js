import React, { useEffect, useState } from "react";
import "devextreme/dist/css/dx.light.css";
import { Fragment } from "react";
import { GenerateSlNo } from "../../common";
import pageService from "../../services/page.service";
import DataGrid, {
  Column,
  Scrolling,
  Toolbar,
  Item,
} from "devextreme-react/data-grid";

import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Editing,
} from "reactstrap";

const PageSetup = (props) => {
  const [pageList, setPageList] = useState([]);
  async () => {
    let { data } = await pageService.pageList();
    setPageList(data?.data);
    console.log(pageList);
  };
  return (
    <Fragment>
      <Card>
        <CardHeader className="border-bottom">
          <CardTitle tag="h4">Page Master</CardTitle>
        </CardHeader>
        <CardBody className="py-2 my-25">
          <Row className="gy-1 pt-75">
            <Col md={12} lg={12}>
              {/* <Form onSubmit={handleSubmit(onSubmit)}>
                <Row className="gy-1 pt-75">
                  <Col md={4} xs={12}>
                    <Label className="form-label" for="title">
                    Activity Title *
                    </Label>
                    <Controller
                      control={control}
                      rules={{ required: true }}
                      name="title"
                      render={({ field }) => (
                        <Input type="text" {...field} placeholder="enter title" />
                      )}
                    />
                    {displayErrors('title', errors)}
                  </Col>
                  <Col lg={4} xs={2}>
                    <div className="d-flex">
                      <Button.Ripple outline className="btn-icon mt-2" color="primary" type="submit">
                        <span className="align-middle ms-25" style={{ marginRight: "10px" }} >
                          Submit
                        </span>
                        {/* <Search size={16} /> */}
              {/* </Button.Ripple>
                    </div>
                  </Col>
                </Row>
              </Form> */}
            </Col>
            <Col md={12} lg={12}>
              <DataGrid
                dataSource={pageList}
                allowColumnReordering={true}
                rowAlternationEnabled={true}
                showBorders={true}
                showRowLines={true}
                columnAutoWidth={true}
                remoteOperations={false}
                repaintChangesOnly={true}
              >
                <Scrolling
                  scrollByContent={true}
                  scrollByThumb={true}
                  showScrollbar="onHover"
                />

                <Toolbar>
                  <Item location="before">
                    {" "}
                    <h4>Activity List</h4>{" "}
                  </Item>
                  <Item
                    name="addRowButton"
                    locateInMenu="auto"
                    location="after"
                  />
                </Toolbar>
                <Column
                  cellRender={GenerateSlNo}
                  dataField=""
                  caption="Sl No."
                />
                <Column dataField="title" caption=" title" dataType="string" />
              </DataGrid>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default PageSetup;
