import { Timeline } from "react-twitter-widgets";
import React, { Component } from "react";
// import TwitterHandle from "./TwitterHandle";
import Styles from '../styles/National.css';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Col } from 'mdbreact';

class Nationals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: [],
      personOfficeInfo: [],
 
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/civicinfo/v2/representatives?address=line%20st.%2030032&includeOffices=true&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU",
      { headers: { "Content-Type": "application/json; charset=utf-8" } }
    )
      .then(response => response.json())
      .then(results => {
        // console.log(Object.values(results[3]));
        let newResults = Object.values(results);
        let officesArray = newResults[3];
        console.log(newResults[3]);
        console.log(newResults[4]);
        let personInfoArray = newResults[4];
        let masterArray = [];
        // console.log(newResults[3][0].divisionId);

        officesArray.forEach(office => {
          if (office.divisionId === "ocd-division/country:us") {
            //   console.log(office.name);
            //   console.log(office.officialIndices);
            office.officialIndices.forEach(index => {
              // console.log(personInfoArray[index]);
              let personInfo = personInfoArray[index];
              //   console.log("hi");
              //   console.log(personInfoArray[index].channels);
              let TwitterHandle;
              if (personInfoArray[index].channels) {
                // console.log("fart machine");
                personInfo.channels.forEach(index2 => {
                  if (index2.type === "Twitter") {
                    // console.log("hey buddy!");
                    // console.log(index2.id);
                    let theirTwitterHandle = index2.id;
                    TwitterHandle = theirTwitterHandle;
                    return TwitterHandle;
                  }
                });
              }
              console.log(TwitterHandle);
              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0],
                party: personInfo.party,
                phoneNumber: personInfo.phones[0],
                twitter: TwitterHandle
              };
              masterArray.push(personOfficeInfo);
            });
          }
        });

        this.setState({
          personOfficeInfo: masterArray
        });
      });

    // fetch(
    //   "https://www.googleapis.com/civicinfo/v2/elections?&key=AIzaSyB3cRW6zO8D3INc-NHDFA-0ck77gQAYpOU",
    //   { headers: { "Content-Type": "application/json; charset=utf-8" } }
    // )
    //   .then(response => response.json())
    //   .then(data => console.log(data));
  }


  render() {
    
    let officeNames = this.state.personOfficeInfo.map(function(item, index) {
      if (item.address.line2 && item.twitter) {
        return (
          <Col>
            <Card style={{ width: "20rem" }}>
              {/* <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              /> */}
              <CardBody className="h-100 w-100">
                  <ul key={index}>
                  <CardTitle>
                    {item.personName}
                    <br />
                    {item.officeName}
                    <br />
                    </CardTitle>
                    <CardText>
                    {item.address.line1} <br />
                    {item.address.line2} <br />
                    {item.address.city}, {item.address.state} {item.address.zip}
                    <br />
                    {item.party}
                    <br />
                    {item.phoneNumber}
                    <div>
                      <Timeline
                        dataSource={{
                          sourceType: "profile",
                          screenName: item.twitter
                        }}
                        options={{
                          username: item.twitter,
                          height: "400",
                          width: "60%"
                        }}
                        onLoad={() => console.log("Timeline is loaded!")}
                      />
                    </div>
                    </CardText>
                  </ul>
                  <MDBContainer>
                    <MDBBtn size="lg" tag="a" floating social="email">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                  </MDBContainer>
                  {/* <Button href="#">Button</Button> */}
              </CardBody>
            </Card>
          </Col>
        );
      }


      if (item.address.line2 && item.twitter === undefined) {
        return (
          <Col>
          <Card style={{ width: "20rem" }}>
            {/* <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            /> */}
            <CardBody className="h-100 w-100">
                <ul key={index}>
                <CardTitle>
                  {item.personName}
                  <br />
                  {item.officeName}
                  <br />
                  </CardTitle>
                  <CardText>
                  {item.address.line1} <br />
                  {item.address.line2} <br />
                  {item.address.city}, {item.address.state} {item.address.zip}
                  <br />
                  {item.party}
                  <br />
                  {item.phoneNumber}
                  </CardText>
                </ul>
                <MDBContainer>
                  <MDBBtn size="lg" tag="a" floating social="email">
                    <MDBIcon icon="envelope" />
                  </MDBBtn>
                </MDBContainer>
            </CardBody>
          </Card>
        </Col>

           );
      } 
          

      if (!item.address.line2 && item.twitter) {
        return (
      
            <Col>
            <Card style={{ width: "20rem" }}>
              {/* <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              /> */}
              <CardBody className="h-100 w-100">
                  <ul key={index}>
                  <CardTitle>
                    {item.personName}
                    <br />
                    {item.officeName}
                    <br />
                    </CardTitle>
                    <CardText>
                    {item.address.line1} <br />
                    {item.address.line2} <br />
                    {item.address.city}, {item.address.state} {item.address.zip}
                    <br />
                    {item.party}
                    <br />
                    {item.phoneNumber}
                    <div>
                      <Timeline
                        dataSource={{
                          sourceType: "profile",
                          screenName: item.twitter
                        }}
                        options={{
                          username: item.twitter,
                          height: "400",
                          width: "60%"
                        }}
                        onLoad={() => console.log("Timeline is loaded!")}
                      />
                    </div>
                    </CardText>
                  </ul>
                  <MDBContainer>
                    <MDBBtn size="lg" tag="a" floating social="email">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                  </MDBContainer>
              </CardBody>
            </Card>
          </Col>
        );
      }



      if ((item.twitter = undefined)) {
        return (
          <Col>
            <Card style={{ width: "20rem" }}>
              <CardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
              />
              <CardBody>
                <ul key={index}>
                  {item.personName}
                  <br />
                  {item.officeName}
                  <br />
                  {item.address.line1} <br />
                  {item.address.city}, {item.address.state} {item.address.zip}
                  <br />
                  {item.party}
                  <br />
                  {item.phoneNumber}
                </ul>
                <MDBContainer>
                    <MDBBtn size="lg" tag="a" floating social="email">
                      <MDBIcon icon="envelope" />
                    </MDBBtn>
                </MDBContainer>
              </CardBody>
            </Card>
          </Col>
        );
      }
    });



    return (
      // <div>
      //   <div>{officeNames}</div>
      // </div>
        <div>
          <p>{officeNames}</p> 
        </div>
    );
  }
}

export default Nationals;

     
