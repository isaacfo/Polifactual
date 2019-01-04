import React, { Component } from "react";

class Nationals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: [],
      personOfficeInfo: []
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
        console.log(newResults[3][0].divisionId);
        officesArray.forEach(office => {
          if (office.divisionId === "ocd-division/country:us") {
            //   console.log(office.name);
            //   console.log(office.officialIndices);
            office.officialIndices.forEach(index => {
              // console.log(personInfoArray[index]);
              let personInfo = personInfoArray[index];
              let personOfficeInfo = {
                officeName: office.name,
                personName: personInfo.name,
                address: personInfo.address[0],
                party: personInfo.party,
                phoneNumber: personInfo.phones[0]
              };
              masterArray.push(personOfficeInfo);
            });
          }
        });

        this.setState({
          personOfficeInfo: masterArray
        });
        // console.log(this.state.items[0]);
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
      if (item.address.line2) {
        return (
          <ul key={index}>
            {item.personName}
            <br />
            {item.officeName}
            <br />
            {item.address.line1} <br />
            {item.address.line2} <br />
            {item.address.city}, {item.address.state} {item.address.zip}
            <br />
            {item.party}
            <br />
            {item.phoneNumber}
          </ul>
        );
      } else {
        return (
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
        );
      }
    });

    return (
      <div>
        <p>{officeNames}</p>
      </div>
    );
  }
}

export default Nationals;
