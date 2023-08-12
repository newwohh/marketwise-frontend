import React from "react";
import securityinfo from "../../assets/3786012.jpg";
import securestorage from "../../assets/4170004.jpg";
import monitor from "../../assets/3198763.jpg";
import orgsec from "../../assets/8778112.jpg";
import advdata from "../../assets/5326273.jpg";
import safesign from "../../assets/4957136.jpg";
import control from "../../assets/8353343.jpg";
import secnot from "../../assets/4966443.jpg";
import useSecurityInfoContentStyles from "../../styles/SecurityInfo/SecurityInfo";
import { Box, Typography } from "@mui/material";

function SecurityInfoContent() {
  const SecurityInfoContentClass = useSecurityInfoContentStyles;

  return (
    <Box component="main" sx={{ backgroundColor: "#F0F8FF" }}>
      <Box
        component="section"
        sx={SecurityInfoContentClass.securityinfofirstdiv}
      >
        <Box sx={SecurityInfoContentClass.securityinfofirstsubdiv}>
          <div>
            <Typography variant="h2">
              Our Commitment to User Protection
            </Typography>
          </div>
          <div>
            <Typography variant="p">
              MarketWise, which is a crypto, forex, and stock market tracker:
              Security and User Protection at TradingView TradingView is
              committed to providing a secure and user-friendly platform for its
              users. We use a variety of security measures to protect your
              personal information
            </Typography>
          </div>
        </Box>
        <div>
          <img
            src={securityinfo}
            alt="securityinfo"
            style={SecurityInfoContentClass.securityinfoimg}
          />
        </div>
      </Box>
      <Box sx={SecurityInfoContentClass.securityinfoseconddiv}>
        <Box sx={SecurityInfoContentClass.securityinfosecondsubdiv}>
          <div
            style={{
              margin: "100px",
              "@media (max-width:1000px)": {
                margin: "0px",
              },
            }}
          >
            <div>
              <Typography
                variant="h4"
                sx={{ fontWeight: 600, color: "#002244" }}
              >
                Data encryption
              </Typography>
            </div>
            <div>
              <Typography variant="h6">
                All of your personal information is encrypted when it is stored
                on our servers. This means that your information is protected
                from unauthorized access.
              </Typography>
            </div>
          </div>
          <Box sx={SecurityInfoContentClass.firstcontentsecurityinfo}>
            <Box sx={SecurityInfoContentClass.securityinfocontentmain}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 1000,
                  margin: "50px",
                  color: "#002244",
                  "@media (max-width:1000px)": {
                    margin: 5,
                  },
                }}
              >
                Platform Security
              </Typography>
              <div>
                <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                  <div>
                    <img
                      src={securestorage}
                      alt="securestore"
                      style={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5" sx={{ color: "#002244" }}>
                      Secure Storage
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                      }}
                    >
                      The vast majority of user funds and assets are safely
                      stored in offline, cold storage facilities.
                    </Typography>
                  </div>
                </Box>
                <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                  <div>
                    <img
                      src={monitor}
                      alt="securestore"
                      style={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5" sx={{ color: "#002244" }}>
                      Real Time Monitoring{" "}
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                      }}
                    >
                      Our risk management system analyzes every withdrawal
                      attempt, password reset, two-factor authentication reset
                      and email address change. Unusual activity triggers
                      suspended withdrawals for a minimum of 24-48 hours.
                    </Typography>
                  </div>
                </Box>
                <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                  <div>
                    <img
                      src={orgsec}
                      alt="securestore"
                      style={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5" sx={{ color: "#002244" }}>
                      Organizational Security
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                      }}
                    >
                      Our wallet and personnel infrastructure features advanced
                      security measures, including multisignature and threshold
                      signature schemes (TSS), ensure the safety and integrity
                      of our users’ funds.
                    </Typography>
                  </div>
                </Box>
                <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                  <div>
                    <img
                      src={advdata}
                      alt="securestore"
                      style={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5" sx={{ color: "#002244" }}>
                      Advanced Data Encryption
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        color: "grey",
                        fontSize: "15px",
                      }}
                    >
                      We protect user data and personal information, including
                      Know-Your-Customer (KYC) information, by encrypting data
                      in storage. Meanwhile, data in transit is secured via
                      end-to-end encryption, ensuring only users have access to
                      their personal information.
                    </Typography>
                  </div>
                </Box>
              </div>
            </Box>
            <div>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 1000,
                  margin: "50px",
                  color: "#002244",
                  "@media (max-width:1000px)": {
                    margin: 5,
                  },
                }}
              >
                User-Level Security
              </Typography>
              <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                <div>
                  <img
                    src={safesign}
                    alt="securestore"
                    style={SecurityInfoContentClass.contentfirstsecuritinfoimg}
                  />
                </div>
                <div>
                  <Typography variant="h5" sx={{ color: "#002244" }}>
                    Safe Sign In
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "grey",
                      fontSize: "15px",
                    }}
                  >
                    Binance supports strict sign-in protocols using two-factor
                    authentication, including hardware, app-based, SMS and email
                    methods.
                  </Typography>
                </div>
              </Box>
              <div style={SecurityInfoContentClass.contentfirstsecurityinfo}>
                <div>
                  <img
                    src={control}
                    alt="securestore"
                    style={SecurityInfoContentClass.contentfirstsecuritinfoimg}
                  />
                </div>
                <div>
                  <Typography variant="h5" sx={{ color: "#002244" }}>
                    Access Control
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "grey",
                      fontSize: "15px",
                    }}
                  >
                    Advanced access control provides users with opt-in security
                    features such as IP and wallet address whitelisting, API
                    access control and device management.
                  </Typography>
                </div>
              </div>
              <Box sx={SecurityInfoContentClass.contentfirstsecurityinfo}>
                <div>
                  <img
                    src={secnot}
                    alt="securestore"
                    style={SecurityInfoContentClass.contentfirstsecuritinfoimg}
                  />
                </div>
                <div>
                  <Typography variant="h5" sx={{ color: "#002244" }}>
                    Security Notifications
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      color: "grey",
                      fontSize: "15px",
                    }}
                  >
                    Receive emails, notifications and security alerts in the
                    event that suspicious activity is detected. Users can secure
                    their account by restricting access to unwanted third
                    parties.
                  </Typography>
                </div>
              </Box>
            </div>
          </Box>
        </Box>
      </Box>
      <Box
        component="section"
        sx={SecurityInfoContentClass.middledivsecurityinfo}
      >
        <Box
          sx={{
            backgroundColor: "#5D76A9",
            padding: "100px",
            borderRadius: "20px",
            color: "white",
          }}
        >
          <Box sx={SecurityInfoContentClass.middledivsecurityinfosubdiv}>
            <Typography variant="h4" sx={{ fontWeight: 600, color: "#002244" }}>
              Working Together To Establish Global Crypto Compliance
            </Typography>
            <Typography variant="p">
              In order to shape the future of crypto compliance across the
              globe, Binance partners with regulators and third parties to
              develop clear regulatory frameworks, guidelines and standards. In
              parts of the world where regulation is still under development, we
              strive to set proactive initiatives to protect our users according
              to global compliance standards. We continue to invest in our
              compliance program and partner with cutting-edge compliance
              technology providers to meet and exceed global regulations.
            </Typography>
          </Box>
        </Box>
      </Box>
      <section style={{ backgroundColor: "#F0F8FF" }}>
        <div>
          <Typography
            align="center"
            variant="h3"
            sx={{ fontWeight: 1000, margin: "100px", color: "#002244" }}
          >
            Contact MarketWise
          </Typography>
        </div>
        <Box sx={SecurityInfoContentClass.lastdivsecurityinfo}>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">Phone Number :</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">Email :</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">Whatsapp :</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">Complaints :</Typography>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">99999 99999</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">example@example.com</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">99999 99999</Typography>
            </div>
            <div style={{ marginBottom: "50px" }}>
              <Typography variant="h6">complaints@example.com</Typography>
            </div>
          </div>
        </Box>
      </section>
    </Box>
  );
}

export default SecurityInfoContent;
