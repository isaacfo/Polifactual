import React, { Component } from "react";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Trello = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg"
                  alt=""
                  className="img-fluid"
                /> 
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">Trello</a>
                </h2>
                <p>
                  Written by
                  <a href="#!">
                    <strong>Our Group</strong>
                  </a>
                  , 01/07/2019
                </p>
                <MDBBtn className="btn-fb waves-light">
                  <MDBIcon icon="Trello" className="pr-2" />
                  Trello
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa nemo enim ipsam voluptatem
                quia voluptas sit qui officia deserunt mollitia animi, id est
                laborum et dolorum fuga quidem rerum facilis est distinctio.
              </p>
              
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default Trello;