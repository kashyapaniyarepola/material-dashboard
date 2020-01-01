import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import CustomInput from "components/CustomInput/CustomInput.js";
//import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const username =  localStorage.getItem('username');
  const firstname =  localStorage.getItem('firstname');
  const lastname =  localStorage.getItem('lastname');
  const userType =  localStorage.getItem('userType');
  const city =  localStorage.getItem('city');
  const streetnumber =  localStorage.getItem('streetnumber');
  const streetname =  localStorage.getItem('streetname');
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>User Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  {/* <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  /> */}
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                   
                  <h6 className={classes.cardCategory}>{username}</h6>
                  
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h6 className={classes.cardCategory}>{firstname}</h6>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                <h6 className={classes.cardCategory}>{lastname}</h6>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <h6 className={classes.cardCategory}>{userType}</h6>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <h6 className={classes.cardCategory}>{streetnumber}</h6>
                <h6 className={classes.cardCategory}>{streetname}</h6>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <h6 className={classes.cardCategory}>{city}</h6>
                </GridItem>
               
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                 
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              {/* <Button color="primary">Update Profile</Button> */}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
                  <h6 className={classes.cardCategory}>{username}</h6>
              <h6 className={classes.cardTitle}>{firstname}</h6>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
