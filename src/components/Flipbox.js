import React from "react"
import styled from "@emotion/styled"
import Row from "../components/Row"
import "./flipbox.module.css"
import styles from "./flipbox.module.css"
import designIcon from "../images/web-design_icon.png"
import marketingIcon from "../images/online-marketing-icon.png"
import hostingIcon from "../images/web-email-hosting_icon.png"
import ecommerceIcon from "../images/ecommerce-img-icon.png"
import seoIcon from "../images/seo-service-icon.png"
import contentIcon from "../images/content-writing-icon.png"
import socialIcon from "../images/social-icon.png"
import payperIcon from "../images/pay-per-click_icon.png"

const MmwService = styled(Row)({})

const ServiceContainer = styled(Row)({
  display: "flex",
  flexWrap: "wrap",
})

const MakeFlip = styled.div({
  backgroundColor: "transparent",
  width: "25%",
  height: "300px",
  perspective: "1000px",
  border: "2px solid #fff",
})

const FlipInner = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
})

const FlipFront = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#eee",
  color: "black",
})
const FlipBack = styled.div({
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  backgroundColor: "#eee",
  color: "white",
  transform: "rotateY(180deg)",
})

const Flipbox = () => {
  return (
    <MmwService className={styles.mmwservice}>
      <ServiceContainer className={styles.servicecontainer}>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={designIcon} alt="Avatar" />
              <h5>Web Design</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Web Design</h5>
              <p>
                The world is getting advanced and for matching the standards of
                present era, online existence is must.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={marketingIcon} alt="Online Marketing" />
              <h5>Online Marketing</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Online Marketing</h5>
              <p>
                Marketing is essential today and no business can shrug off the
                value of this powerful factor.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={hostingIcon} alt="Web And Email Hosting" />
              <h5>Web And Email Hosting</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Web And Email Hosting</h5>
              <p>
                Web hosting is actually the space which you purchase on a web
                server so as to store your site files.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={ecommerceIcon} alt="Ecommerce" />
              <h5>Ecommerce</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Ecommerce</h5>
              <p>
                Over the previous decade the usefulness of internet has
                augmented manifold.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
      </ServiceContainer>
      <ServiceContainer className={styles.servicecontainer}>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={seoIcon} alt="SEO" />
              <h5>SEO</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>SEO</h5>
              <p>
                SEO is one of the main marketing channels to endorse website
                exposure via higher visibility in search engines.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={contentIcon} alt="Content Writing" />
              <h5>Content Writing</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Content Writing</h5>
              <p>
                At Make My Website, our experts are well acquainting with all
                the tactics of content writing.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={socialIcon} alt="Social Media Marketing" />
              <h5>Social Medila Marketing</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Social Medila Marketing</h5>
              <p>
                No matter what you sell and who is your buyer, making use of
                social media as a marketing device can prove very helpful for
                growing your brand.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
        <MakeFlip className={styles.flipbox}>
          <FlipInner className={styles.flipinner}>
            <FlipFront className={styles.flipfront}>
              <img src={payperIcon} alt="Pay Per Click" />
              <h5>Pay Per Click</h5>
            </FlipFront>
            <FlipBack className={styles.flipback}>
              <h5>Pay Per Click</h5>
              <p>
                Even the marketing experts can make errors when they begin to
                sell a new product with the help of PPC.
              </p>
            </FlipBack>
          </FlipInner>
        </MakeFlip>
      </ServiceContainer>
    </MmwService>
  )
}

export default Flipbox
