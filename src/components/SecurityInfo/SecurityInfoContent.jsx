import React from "react";
import securityinfo from "../../assets/3786012.jpg";
import securestorage from "../../assets/4170004.jpg";
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
            <div className="">
              <Typography variant="h5" sx={{ fontWeight: 1000 }}>
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
                    <Typography variant="p">
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
                      src={securestorage}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">Secure Storage</Typography>
                    <Typography variant="p">
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
                      src={securestorage}
                      alt="securestore"
                      className={
                        SecurityInfoContentClass.contentfirstsecuritinfoimg
                      }
                    />
                  </div>
                  <div>
                    <Typography variant="h5">Secure Storage</Typography>
                    <Typography variant="p">
                      The vast majority of user funds and assets are safely
                      stored in offline, cold storage facilities.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Typography variant="h5" sx={{ fontWeight: 1000 }}>
                User-Level Security
              </Typography>
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
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
                  <Typography variant="p">
                    The vast majority of user funds and assets are safely stored
                    in offline, cold storage facilities.
                  </Typography>
                </div>
              </div>
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
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
                  <Typography variant="p">
                    The vast majority of user funds and assets are safely stored
                    in offline, cold storage facilities.
                  </Typography>
                </div>
              </div>
              <div
                className={SecurityInfoContentClass.contentfirstsecurityinfo}
              >
                <div>
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
                  <Typography variant="p">
                    The vast majority of user funds and assets are safely stored
                    in offline, cold storage facilities.
                  </Typography>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </main>
  );
}

export default SecurityInfoContent;
