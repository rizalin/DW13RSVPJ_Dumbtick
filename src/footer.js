import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "reactstrap";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FF5555" }}>
        <Container>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs>
              <div>
                <h4>Halo</h4>
                <p>
                  dumb-tick - is a web-based platform that provides tickets for
                  various events around sports, music, science, and programming.
                </p>
              </div>
            </Grid>
            <Grid item xs>
              <div>
                <h4>Links</h4>
                <p>About Us</p>
                <h4>Follow Us</h4>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </Grid>
            <Grid item xs>
              <div>
                <h4>Have A Question</h4>
                <p>Dumb-tick</p>
                <p>Email : Support@dumbtick.com</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;
