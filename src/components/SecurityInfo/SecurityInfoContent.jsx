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
import { Typography } from "@mui/material";

function SecurityInfoContent() {
  const SecurityInfoContentClass = useSecurityInfoContentStyles();

  return (
    <main>
      <section className={SecurityInfoContentClass.securityinfofirstdiv}>
        <div className={SecurityInfoContentClass.securityinfofirstsubdiv}>
          <div>
            <Typography variant="h2">
              Our Commitment to User Protection
            </Typography>
          </div>
          <div>
            <Typography variant="p">
              TradeView, which is a crypto, forex, and stock market tracker:
              Security and User Protection at TradingView TradingView is
              committed to providing a secure and user-friendly platform for its
              users. We use a variety of security measures to protect your
              personal information
            </Typography>
          </div>
        </div>
        <div>
          <img
            src={securityinfo}
            alt="securityinfo"
            className={SecurityInfoContentClass.securityinfoimg}
          />
        </div>
      </section>
      <section className={SecurityInfoContentClass.securityinfoseconddiv}>
        <div className={SecurityInfoContentClass.securityinfosecondsubdiv}>
          <div style={{ margin: "100px" }}>
            <div>
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
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
          <div className={SecurityInfoContentClass.firstcontentsecurityinfo}>
            <div style={{ marginRight: "200px" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 1000, margin: "50px" }}
              >
                Platform Security
              </Typography>
              <div>
                <div
                  className={SecurityInfoContentClass.contentfirstsecurityinfo}
                >
                  <div className="">
                    <img
                      src={securestorage}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">Secure Storage</Typography>
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
                </div>
                <div
                  className={SecurityInfoContentClass.contentfirstsecurityinfo}
                >
                  <div>
                    <img
                      src={monitor}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">Real Time Monitoring </Typography>
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
                </div>
                <div
                  className={SecurityInfoContentClass.contentfirstsecurityinfo}
                >
                  <div>
                    <img
                      src={orgsec}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">
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
                </div>
                <div
                  className={SecurityInfoContentClass.contentfirstsecurityinfo}
                >
                  <div>
                    <img
                      src={advdata}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">
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
                </div>
              </div>
            </div>
            <div>
              <Typography
                variant="h5"
                sx={{ fontWeight: 1000, margin: "50px" }}
              >
                User-Level Security
              </Typography>
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
                  <img
                    src={safesign}
                    alt="securestore"
                    className={
                      SecurityInfoContentClass.contentfirstsecuritinfoimg
                    }
                  />
                </div>
                <div>
                  <Typography variant="h5">Safe Sign In</Typography>
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
              </div>
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
                  <img
                    src={control}
                    alt="securestore"
                    className={
                      SecurityInfoContentClass.contentfirstsecuritinfoimg
                    }
                  />
                </div>
                <div>
                  <Typography variant="h5">Access Control</Typography>
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
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
                  <img
                    src={secnot}
                    alt="securestore"
                    className={
                      SecurityInfoContentClass.contentfirstsecuritinfoimg
                    }
                  />
                </div>
                <div>
                  <Typography variant="h5">Security Notifications</Typography>
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
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className={SecurityInfoContentClass.middledivsecurityinfo}>
        <div className={SecurityInfoContentClass.middledivsecurityinfosubdiv}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Working Together To Establish Global Crypto Compliance
          </Typography>
          <Typography variant="p">
            In order to shape the future of crypto compliance across the globe,
            Binance partners with regulators and third parties to develop clear
            regulatory frameworks, guidelines and standards. In parts of the
            world where regulation is still under development, we strive to set
            proactive initiatives to protect our users according to global
            compliance standards. We continue to invest in our compliance
            program and partner with cutting-edge compliance technology
            providers to meet and exceed global regulations.
          </Typography>
        </div>
      </section>
      <section>
        <div style={{ margin: "100px" }}>
          <Typography align="center" variant="h3" sx={{ fontWeight: 1000 }}>
            Contact Trade View
          </Typography>
        </div>
        <div className={SecurityInfoContentClass.lastdivsecurityinfo}>
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
        </div>
      </section>
    </main>
  );
}

export default SecurityInfoContent;
