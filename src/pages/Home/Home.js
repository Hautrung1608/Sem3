import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto px-4 py-20">
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} container>
            {" "}
            <h2 style={{ fontSize: "54px",  color:"blue"}}>
              Get familiar with the newest way to recharge and pay your bills
              with efficicency and private secure control
            </h2>
            <Grid item xs={12} md={5.5} fontSize={30} style={{ }}>
              Haven't got used to the new way? Leave your information here for
              our contacts
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "Flex", gap: "20px", flexDirection: "column" }}
            >
              {" "}
              <TextField
                id="filled-basic"
                label="Your phone number"
                variant="filled"
              />
              <TextField
                id="filled-basic"
                label="Your fullname"
                variant="filled"
              />
              <Button variant="outlined">Submit</Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            {" "}
            <img
              style={{ borderRadius: "10px" }}
              src="/homeBanner.jpg"
            ></img>{" "}
          </Grid>
        </Grid>
      </div>
      <Card>
        <p
          style={{
            textAlign: "center",
            margin: "59px 0px",
            fontSize: "30px",
            fontWeight: "bolder",
            color:"blue"
          }}
        >
          Why choose us?
        </p>
        <Grid container style={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ShieldIcon style={{ fontSize: "100px",color:"green" }}> </ShieldIcon>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "20px 0px",
              }}
            >
              Secure & Protect
            </h2>
            <p style={{ textAlign: "center" }}>
              At the time of technology uprising, we value our clients
              information enabling them to trust our services
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AccountBoxIcon style={{ fontSize: "100px",color:"orange" }}></AccountBoxIcon>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "20px 0px",
              }}
            >
              Personalized Experiences
            </h2>
            <p style={{ textAlign: "center" }}>
              Diversity is everywhere, which is why we values your
              identification as well as your experiences when you entrust us
              with your time and resources
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AppShortcutIcon style={{ fontSize: "100px",color:"greenyellow" }}></AppShortcutIcon>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "20px 0px",
              }}
            >
              Fast and efficent
            </h2>
            <p style={{ textAlign: "center" }}>
              We understand commuting and travelling can be a hassle for you,
              that's why with us. You can take control of your bills everywhere!
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <EuroSymbolIcon style={{ fontSize: "100px" }} />
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bolder",
                margin: "20px 0px",
              }}
            >
              Finance Overseer
            </h2>
            <p style={{ textAlign: "center" }}>
              We enable you to further take control our your personal finances,
              ranging from bills, post-bill to others form of credidentials
            </p>
          </Grid>
        </Grid>
      </Card>
      <Card>
        <p
          style={{
            textAlign: "center",
            margin: "59px 0px",
            fontSize: "30px",
            fontWeight: "bolder",
            color:"blue"
          }}
        >
          What does our customer says about us
        </p>
        <Grid container style={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                title="Time-saving and excelent!"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/business-women-working.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  I tried using it once but i don't know the way around it,
                  after i visited them i am now able to fully personalized as
                  well as control my finance more well-rounded and secure with
                  their help!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">Alex</Avatar>}
                title="Money well spent!"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/images.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The billing process is straightforward, and the charges are
                  always accurately reflected in my monthly statement. highly
                  recommended for their effort and technology
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">John</Avatar>}
                title="Time-saving and excelent!"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/dssad.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  The charges are always accurately reflected in my monthly
                  statement. I appreciate their commitment to providing a
                  reliable and cost-effective phone service. Highly
                  recommended!"
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar aria-label="recipe">Miguel</Avatar>}
                title="A new innovative way!"
                subheader="September 14, 2016"
              />
              <CardMedia
                component="img"
                height="194"
                image="/xas.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  I recently switched to this phone service provider, and I must
                  say, I'm quite impressed with their transparent and reasonable
                  charges. The service charge for my phone plan is incredibly
                  affordable
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Card>

      <Grid container spacing={3}style={{  margin:"30px 0px", display:"flex" }}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <h1 style={{ fontSize:"40px",fontWeight:"bolder",color:"blue" }}>Our Practices Areas</h1>
          <p>
            Behind all the mess of electronics an disturbance that exists on the
            wide web, we standout solely to serve you with an innovative way of
            handling with your finnance!
          </p>
          <p>
            A new thing may come and go but we believe with our solutions, we
            may stay for years to come enabling our clients to entrust us with
            of proficency and efficency
          </p>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <left>
              <AccountBalanceRoundedIcon style={{ fontSize:"50" }}></AccountBalanceRoundedIcon>
            </left>
            <right style={{ display: "flex", flexDirection: "column" }}>
              <top  style={{ fontWeight:"bolder" }}>Accountant Stability</top>
              <bot>
                A strong focus on user experience and customer satisfaction,
                the company has gained a reputation for delivering high-quality
                products that revolutionize the way people interact with
            
              </bot>
            </right>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <left>
              <ApartmentRoundedIcon style={{ fontSize:"50" }}></ApartmentRoundedIcon>
            </left>
            <right style={{ display: "flex", flexDirection: "column" }}>
              <top style={{ fontWeight:"bolder" }}>Rounding and Moving</top>
              <bot>
                Understands the importance of maintaining the confidentiality
                and integrity of user account information. We have implemented
                multi-factor authentication, encryption technique
              </bot>
            </right>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <left>
              <AutoGraphRoundedIcon style={{ fontSize:"50" }} />
            </left>
            <right style={{ display: "flex", flexDirection: "column" }}>
              <top  style={{ fontWeight:"bolder" }}>Commiment and Scaling</top>
              <bot>
                Committed to providing a secure and reliable environment for its
                users' accounts. By investing in advanced security measures and
                staying proactive in addressing potential risks
              </bot>
            </right>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
